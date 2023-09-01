'use client';
import { useState } from 'react';
import { FaLock, FaArrowLeft } from 'react-icons/fa';
import { Button } from '@components/Button';
import { InputField } from '@components/InputField';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonLoader } from '@components/Spinner';
import { useRouter } from 'next/navigation';

const schema = yup.object().shape({
    password: yup.string().required('Password is required'),
    confirm_password: yup.string().required('Password is required'),
});

export default function NewPasswordScreen({ token }) {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const { isLoading, mutate } = useMutation({
        mutationFn: (data) => {
            return axios.post(
                `${process.env.API_URL}/auth/reset-password?token=${token}`,
                { password: data?.password }
            );
        },
        onSuccess: (data) => {
            router.push('/signin');
        },
        onError: (error) => {
            setErrorMessage(error.response?.data?.message);
        },
    });

    const onSubmitData = (data) => {
        mutate(data);
    };

    return (
        <section className="text-center lg:flex">
            <div className="hidden lg:block h-screen form w-1/2"></div>
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
                    <h1 className="mb-1 text-2xl">Set New Password</h1>
                    <p className="px-10">
                        Create a new password for your account. Make sure it's
                        secure, memorable and different from the previous
                        password you have used.
                    </p>
                </div>
                <form
                    className="text-pry-text-color-1 px-10 max-w-md mx-auto"
                    onSubmit={handleSubmit(onSubmitData)}
                >
                    <div className="relative">
                        <InputField
                            type="password"
                            placeholder="password"
                            required
                            {...register('password')}
                            errors={errors}
                        />
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                            <FaLock />
                        </span>
                    </div>
                    <div className="relative">
                        <InputField
                            type="password"
                            placeholder="confirm password"
                            required
                            {...register('confirm_password')}
                            errors={errors}
                        />
                        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                            <FaLock />
                        </span>
                    </div>
                    <Button className="w-full font-semibold bg-btn-color my-2 py-3 rounded-default border-0 text-[#F6F5F6]">
                        {isLoading ? (
                            <ButtonLoader></ButtonLoader>
                        ) : (
                            'Reset Password'
                        )}
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
