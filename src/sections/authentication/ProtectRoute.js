'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProtect';
import { PageLoader } from '@components/Spinner';

export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/signin');
            return;
        }
    }, [isAuthenticated, loading]);

    if (loading || !isAuthenticated) {
        return <PageLoader />;
    }

    return children;
};
