'use client';
import { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { loginUser } from '@sections/api/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function loadUserFromCookies() {
            const access_token = Cookies.get('access_token');
            if (access_token) {
                const userData = jwtDecode(access_token);
                // Get user from the backend using the access token to make sure it is a valid one
                const response = await axios(
                    `http://localhost:5000/v1/api/users/${userData.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                        },
                    }
                );
                const user = response.data;
                if (user) setUser(user);
            }
            setLoading(false);
        }
        loadUserFromCookies();
    }, []);

    const login = async ({ email, password }) => {
        const response = await loginUser({ email, password });
        const { access_token } = response.data;
        if (access_token) {
            Cookies.set('access_token', access_token, { expires: 60 });
            const user = response.data;
            if (user) {
                router.push('/');
            }
            setUser(user);
        }
    };

    const logout = (email, password) => {
        Cookies.remove('access_token');
        setUser(null);
        window.location.pathname = '/signin';
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated: !!user, user, login, loading, logout }}
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
        return;
    }

    return children;
};
