'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProtect';
import { PageLoader } from '@components/Spinner';

export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    const pathnames = ['/signin', '/signup'];

    if (loading) {
        return <PageLoader />;
    }

    if (!isAuthenticated && !pathnames.includes(window.location.pathname)) {
        router.push('/signin');
        return null;
    }

    return children;
};
