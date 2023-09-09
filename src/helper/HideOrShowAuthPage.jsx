'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@sections/authentication/AuthProtect';
import { PageLoader } from '@components/Spinner';

export default function HideOrShowAuthPage({ children }) {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    if (loading) {
        return <PageLoader />;
    }

    if (isAuthenticated) {
        router.push('/events');
        return;
    }

    return children;
}
