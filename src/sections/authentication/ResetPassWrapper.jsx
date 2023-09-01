'use client';
import { useSearchParams } from 'next/navigation';
import NewPasswordScreen from './NewPasswordScreen';
import ResetPassword from './ResetPassword';

export default function ResetPassWrapper() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    return (
        <div>
            {token ? (
                <NewPasswordScreen token={token}></NewPasswordScreen>
            ) : (
                <ResetPassword></ResetPassword>
            )}
        </div>
    );
}
