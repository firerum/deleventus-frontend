'use client';
import { useSearchParams } from 'next/navigation';
import { Button } from '@components/Button';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ButtonLoader } from '@components/Spinner';
import { useAuth } from './AuthProtect';
import { Notification } from '@components/Notification';
import { useMutation } from '@tanstack/react-query';

export default function VerifyEmail() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const { accessToken } = useAuth();

    const { isError, isLoading, isSuccess, mutate, error } = useMutation({
        mutationFn: () => {
            return axios.post(
                `${process.env.API_URL}/auth/confirm-email`,
                { token },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
        },
        onSuccess: () => {
            router.replace('/signin');
        },
    });

    return (
        <section className="pt-24 mx-auto text-center">
            {isError && (
                <Notification
                    type="error"
                    message={error?.response?.data?.message}
                    duration="5000"
                />
            )}
            {isSuccess && (
                <Notification
                    type="success"
                    message="Email Verification successful!"
                    duration={5000}
                />
            )}
            <span className="inline-block m-auto mb-6">
                <Link href="/">
                    <Image
                        src="/images/logo-full-color.svg"
                        alt="deleventus logo"
                        width={40}
                        height={40}
                        priority={true}
                        className="w-56 h-16"
                    />
                </Link>
            </span>
            <div>
                <h1 className="text-3xl">Verify your email</h1>
                <p className="max-w-sm mx-auto">
                    Welcome to Deleventus! click the link below to verify your
                    email and start creating amazing memories
                </p>
            </div>
            <Button
                className="font-semibold bg-btn-color my-4 py-3 px-12 rounded-default border-0 text-[#F6F5F6]"
                onClick={mutate}
            >
                {isLoading ? (
                    <ButtonLoader></ButtonLoader>
                ) : (
                    <span>Verify Email</span>
                )}
            </Button>
        </section>
    );
}
