import { FaCheck } from 'react-icons/fa';
import { Button } from '@components/Button';
import { ButtonLoader } from '@components/Spinner';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function ResendVerificationLink({ email, message }) {
    const { isError, isLoading, mutate } = useMutation({
        mutationFn: (email) => {
            return axios.post(
                `${process.env.API_URL}/auth/reset-password-link`,
                { email }
            );
        },
    });

    return (
        <section className="flex flex-col items-center px-10 pt-10 max-w-3xl mx-auto">
            <div className="order-2 mb-4">
                <h1 className="text-2xl">Verification email sent</h1>
                <p className="">
                    We have sent a verification link to{' '}
                    <span className="font-semibold">{email}</span>. <br />
                    The link in the email will expire in 24hrs. <br />
                    It may take a few minutes for the email to reach your inbox
                    or may end up in your spam folder.
                </p>
            </div>
            <span className="order-3 mb-1">Email did not arrive?</span>
            <Button
                className={`order-4 text-white bg-btn-color font-semibold px-6 py-default rounded-default`}
                onClick={() => mutate(email)}
            >
                {isLoading ? (
                    <ButtonLoader></ButtonLoader>
                ) : (
                    'Resend Verification Link'
                )}
            </Button>
            <span className="order-1 bg-green-500 text-white border-1 w-12 h-12 mb-2 rounded-full flex items-center justify-center">
                <FaCheck />
            </span>
        </section>
    );
}
