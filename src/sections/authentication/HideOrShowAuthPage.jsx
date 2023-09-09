'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@sections/authentication/AuthProtect';
import { PageLoader } from '@components/Spinner';

export default function HideOrShowAuthPage({ children }) {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && isAuthenticated) {
            router.push('/events');
            return;
        }
    }, [isAuthenticated, loading]);

    if (loading || isAuthenticated) {
        return <PageLoader />;
    }

    return children;
}
