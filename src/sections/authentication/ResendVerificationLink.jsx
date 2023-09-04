import { FaCheck } from 'react-icons/fa';
import { Button } from '@components/Button';
import { ButtonLoader } from '@components/Spinner';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Notification } from '@components/Notification';

export default function ResendVerificationLink({ email }) {
    const accessToken = Cookies.get('access_token');
    const { isError, isLoading, isSuccess, error, mutate, data } = useMutation({
        mutationFn: () => {
            return axios.get(
                `${process.env.API_URL}/auth/resend-confirmation-link`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
        },
    });

    return (
        <section className="flex flex-col items-center px-10 pt-10 max-w-3xl mx-auto">
            {isSuccess && (
                <Notification
                    type="success"
                    message="Check your inbox for verification email"
                    duration="5000"
                />
            )}
            {isError && (
                <Notification
                    type="error"
                    message="Oops! Looks like something is off. Try again"
                    duration="5000"
                />
            )}
            <div className="order-2 mb-6 max-w-[300px] mx-auto">
                <h1 className="text-2xl">Verification email sent</h1>
                <p className="">
                    We have sent a verification link to{' '}
                    <span className="font-semibold">{email}</span>. <br />
                    The link in the email will expire in 24hrs. <br />
                    It may take a few minutes for the email to reach your inbox
                    or may end up in your spam folder.
                </p>
            </div>
            <Button
                className={`order-3 text-white bg-btn-color font-semibold px-6 py-default rounded-default`}
                onClick={() => mutate(email)}
            >
                {isLoading ? (
                    <ButtonLoader></ButtonLoader>
                ) : (
                    'Resend Verification Link'
                )}
            </Button>
            <span className="order-1 bg-green-500 text-white border-1 w-12 h-12 mb-6 rounded-full flex items-center justify-center">
                <FaCheck />
            </span>
        </section>
    );
}
