'use client';
import { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { loginUser, registerUser } from '@helper/auth';
import { useQuery } from '@tanstack/react-query';

const AuthContext = createContext({});
const API_URL = process.env.API_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [refreshTimer, setRefreshTimer] = useState(0);
    const router = useRouter();

    useEffect(() => {
        async function loadUserFromCookies() {
            const access_token = Cookies.get('access_token');
            const refresh_token = Cookies.get('refresh_token');
            if (access_token && refresh_token) {
                setAccessToken(access_token);
                setRefreshToken(refresh_token);
                const tokenData = jwtDecode(access_token);
                try {
                    const user = await fetchUserData(
                        tokenData.id,
                        access_token
                    );
                    if (user) setUser(user);
                    setLoading(false);
                    checkTokenExpiration(access_token);
                } catch (error) {
                    console.error('Error loading user:', error);
                    setLoading(false);
                    logout();
                }
            } else {
                setLoading(false);
            }
        }

        loadUserFromCookies();
    }, []);

    const fetchUserData = async (userId, access_token) => {
        try {
            const response = await axios.get(`${API_URL}/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Access token expired, attempt to refresh token
                getRefreshToken();
            } else {
                throw error;
            }
        }
    };

    // check token for expiration
    const checkTokenExpiration = (access_token) => {
        const tokenExpiration = jwtDecode(access_token).exp;
        const currentTime = Math.floor(Date.now() / 1000);
        const timeUntilExpiry = tokenExpiration - currentTime;

        if (timeUntilExpiry <= 60) {
            getRefreshToken();
        } else {
            setRefreshTimer(timeUntilExpiry - 60);
        }
    };

    const acquireLock = async () => {
        try {
            // Use cookie to acquire a lock
            const lockValue = Cookies.get('tokenRefreshLock');
            if (!lockValue) {
                Cookies.set('tokenRefreshLock', 'locked');
                return true;
            }

            return false;
        } catch (error) {
            console.error('Error acquiring lock', error);
            return false;
        }
    };

    const releaseLock = () => {
        try {
            // Release the lock by removing the cookie item
            Cookies.remove('tokenRefreshLock');
        } catch (error) {
            console.error('Error releasing lock', error);
        }
    };

    const broadcastTokenRefreshed = (message) => {
        try {
            // Use the Broadcast Channel API to notify other tabs
            const broadcastChannel = new BroadcastChannel(
                'tokenRefreshChannel'
            );
            broadcastChannel.postMessage(message);
            broadcastChannel.close();
        } catch (error) {
            console.error('Error broadcasting token refresh', error);
        }
    };

    // get new access and refresh token when the access_token is about to expire
    const getRefreshToken = async () => {
        if (!refreshToken) return;
        try {
            // Acquire a lock to prevent multiple tabs from refreshing the token simultaneously
            const canRefresh = await acquireLock();
            if (canRefresh) {
                const response = await axios(`${API_URL}/auth/refresh`, {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                });
                if (response.status === 200) {
                    const { access_token, refresh_token } = response.data;
                    setAccessToken(access_token);
                    setRefreshToken(refresh_token);
                    // Store the new access token.
                    Cookies.set('access_token', access_token);
                    Cookies.set('refresh_token', refresh_token);
                    checkTokenExpiration(access_token);
                    // Broadcast a message to other tabs to update their state
                    broadcastTokenRefreshed(true);
                } else {
                    // Handle refresh token error.
                    console.error('Failed to refresh access token');
                    logout();
                }
                // Release the lock
                releaseLock();
            }
        } catch (error) {
            console.error('Error refreshing access token', error);
            logout();
        } finally {
            releaseLock();
        }
    };

    useEffect(() => {
        if (refreshTimer !== null) {
            const tokenCheckInterval = setInterval(
                getRefreshToken,
                refreshTimer * 1000
            );
            return () => clearInterval(tokenCheckInterval);
        }
    }, [refreshTimer]);

    const login = async ({ email, password }) => {
        try {
            const result = await loginUser({ email, password });
            if (result.status === 200) {
                const { access_token, refresh_token } = result?.data;
                Cookies.set('access_token', access_token);
                Cookies.set('refresh_token', refresh_token);
                const tokenData = jwtDecode(access_token);
                const user = await fetchUserData(tokenData.id, access_token);
                if (user) {
                    setUser(user);
                    router.replace('/events');
                }
                // Refresh tokens after successful login from a new device
                // getRefreshToken();
            }
            return result;
        } catch (err) {
            throw err;
        }
    };

    const register = async (data) => {
        try {
            const response = await registerUser(data);
            if (response.status === 201) {
                const { access_token, refresh_token } = response.data;
                if (access_token) {
                    Cookies.set('access_token', access_token);
                    Cookies.set('refresh_token', refresh_token);
                }
            }
            return response;
        } catch (err) {
            throw err;
        }
    };

    const logout = () => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                login,
                register,
                loading,
                logout,
                accessToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
