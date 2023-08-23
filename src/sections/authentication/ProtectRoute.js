'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProtect';
import { PageLoader } from '@components/Spinner';

export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    if (loading) {
        return <PageLoader />;
    }

    if (!isAuthenticated) {
        router.push('/signin');
    }

    return children;
};
