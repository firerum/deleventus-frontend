'use client';
import { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { loginUser, registerUser } from '@sections/api/auth';

const AuthContext = createContext({});
const API_URL = 'http://localhost:5000/v1/api';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [userActivity, setUserActivity] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function loadUserFromCookies() {
            const access_token = Cookies.get('access_token');
            const refresh_token = Cookies.get('refresh_token');
            if (access_token && refresh_token) {
                setAccessToken(access_token);
                setRefreshToken(refresh_token);
                // Get user from the api using the access token to make sure it is a valid one
                const userData = jwtDecode(access_token);
                if (userData.exp * 1000 < Date.now()) {
                    logout();
                    return;
                }
                const response = await axios(
                    `${API_URL}/users/${userData.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                        },
                    }
                );
                if (response.status === 401) {
                    logout();
                    return;
                }
                const user = response.data;
                if (user) setUser(user);
            }
            setLoading(false);
        }

        loadUserFromCookies();

        // check token for expiration
        const checkTokenExpiration = () => {
            const currentTime = Math.floor(Date.now() / 1000);
            const tokenExpiration = accessToken && jwtDecode(accessToken);
            const timeDifference = tokenExpiration.exp - currentTime;
            // Token is about to expire in 2 minutes, initiate refresh.
            if (timeDifference <= 120) {
                getRefreshToken();
            }
        };

        const tokenCheckInterval = setInterval(checkTokenExpiration, 60000); // Check every minute

        return () => {
            clearInterval(tokenCheckInterval);
        };
    }, []);

    // get new access and refresh token when the access_token is about to expire
    const getRefreshToken = async () => {
        if (!refreshToken) return;
        try {
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
            } else {
                // Handle refresh token error.
                console.error('Failed to refresh access token');
                logout();
            }
        } catch (error) {
            console.error('Error refreshing access token', error);
            logout();
        }
    };

    const login = async ({ email, password }) => {
        const response = await loginUser({ email, password });
        const { access_token, refresh_token } = response.data;
        if (access_token) {
            Cookies.set('access_token', access_token, { expires: 60 });
            Cookies.set('refresh_token', refresh_token);
            const userData = jwtDecode(access_token);
            const response = await axios(`${API_URL}/users/${userData.id}`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            const user = response.data;
            if (user) {
                router.push('/');
            }
            setUser(user);
        }
    };

    const register = async (data) => {
        try {
            const response = await registerUser(data);
            if (response.status !== 201) return response;
            const { access_token, refresh_token } = response.data;
            if (access_token) {
                Cookies.set('access_token', access_token);
                Cookies.set('refresh_token', refresh_token);
                const userData = jwtDecode(access_token);
                const response = await axios(
                    `${API_URL}/users/${userData.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                        },
                    }
                );
                const user = response.data;
                if (user) {
                    router.push('/');
                }
                setUser(user);
            }
        } catch (err) {
            return err;
        }
    };

    const logout = () => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        setUser(null);
        router.push('/signin');
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
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    const pathnames = ['/signin', '/signup'];

    if (loading) {
        return 'loading...';
    }

    if (!isAuthenticated && !pathnames.includes(window.location.pathname)) {
        router.push('/signin');
        return null;
    }

    return children;
};
