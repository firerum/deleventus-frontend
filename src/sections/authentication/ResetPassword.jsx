'use client';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';
import { ButtonLoader } from '@components/Spinner';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Notification } from '@components/Notification';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
});

export default function ResetPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const { isLoading, isError, isSuccess, mutate, error } = useMutation({
        mutationFn: (data) => {
            return axios.post(
                `${process.env.API_URL}/auth/reset-password-link`,
                data
            );
        },
    });

    const onSubmitData = (data) => {
        mutate(data);
    };

    return (
        <section className="text-center lg:flex">
            <div className="hidden lg:block h-screen form pt-24 w-1/2"></div>
            <div className="bg-white pt-24 lg:w-1/2 text-center py-12 max-w-3xl mx-auto rounded-md">
                <span className="inline-block m-auto">
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
                <div className="mb-6">
                    <h1 className="mb-1 text-2xl">Forgot Password</h1>
                    <p className="px-10 max-w-lg mx-auto">
                        Enter the email address associated with your account.
                        We'll send a reset link to verify your identity
                    </p>
                </div>
                {isError && (
                    <Notification
                        message={error?.response?.data?.message}
                        type="error"
                        duration={5000}
                    />
                )}
                {isSuccess && (
                    <Notification
                        message="Password reset link sent!"
                        type="success"
                        duration={5000}
                    />
                )}
                <form
                    className="text-pry-text-color-1 px-10 max-w-md mx-auto"
                    onSubmit={handleSubmit(onSubmitData)}
                >
                    <InputField
                        type="email"
                        placeholder="email"
                        {...register('email')}
                        errors={errors}
                    >
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                            <FaEnvelope />
                        </span>
                    </InputField>

                    <Button className="w-full bg-btn-color mb-2 py-3 rounded-default border-0 text-[#F6F5F6]">
                        <div className="font-semibold">
                            {isLoading ? (
                                <ButtonLoader></ButtonLoader>
                            ) : (
                                'Send Reset Link'
                            )}
                        </div>
                    </Button>
                    <Link
                        href="/signin"
                        className="w-full text-[#5C73DB] flex items-center justify-center gap-2"
                    >
                        <FaArrowLeft />
                        Back to Log In
                    </Link>
                </form>
            </div>
        </section>
    );
}
