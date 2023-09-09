'use client';
import { useState, useEffect } from 'react';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';
import { signIn, getProviders } from 'next-auth/react';
import { FaGoogle, FaFacebook, FaLock, FaEnvelope } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import Link from 'next/link';
import { useAuth } from './AuthProtect';
import { ButtonLoader } from '@components/Spinner';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '@utils/validation/validateUser';
import { useMutation } from '@tanstack/react-query';
import ResendVerificationLink from './ResendVerificationLink';
import { Notification } from '@components/Notification';

export default function Signin() {
    const { login } = useAuth();
    const [providers, setProviders] = useState(null);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const getAllProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        };
        getAllProviders();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(signInSchema),
    });

    const { isError, isLoading, mutate, error, isSuccess } = useMutation({
        mutationFn: (data) => {
            return login(data);
        },
    });

    const submitData = (data) => {
        setEmail(data?.email);
        mutate(data);
    };

    return (
        <section className="text-center lg:flex">
            <div className="hidden h-screen lg:flex form w-1/2"></div>
            {error?.response?.data.message ===
            'Pending Account. Verify Your Email' ? (
                <>
                    <Notification
                        message={error?.response?.data?.message}
                        type="error"
                        duration={5000}
                    />
                    <ResendVerificationLink email={email} />
                </>
            ) : (
                <div className="bg-white lg:w-1/2 text-center py-12 max-w-3xl mx-auto rounded-md">
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
                        <h1 className="mb-1 text-2xl">Welcome Back</h1>
                        <p>Please enter your details to Log In</p>
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
                            message="Login successful!"
                            type="success"
                            duration={5000}
                        />
                    )}
                    <form className="text-pry-text-color-1 px-10 max-w-md mx-auto">
                        <div>
                            <InputField
                                type="email"
                                placeholder="email"
                                required
                                {...register('email')}
                                errors={errors}
                            >
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                                    <FaEnvelope />
                                </span>
                            </InputField>

                            <InputField
                                type="password"
                                placeholder="password"
                                required
                                {...register('password')}
                                errors={errors}
                            >
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                                    <FaLock />
                                </span>
                            </InputField>

                            <div className="flex gap-4">
                                <label htmlFor="" className="order-2">
                                    Remember me
                                </label>
                                <InputField
                                    type="checkbox"
                                    name=""
                                    id=""
                                    onChange={(e) =>
                                        console.log(e.target.value)
                                    }
                                />
                                <Link
                                    href="/reset-password"
                                    className="order-3 ml-auto text-[#5C73DB]"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                        <Button
                            className="w-full bg-btn-color mb-2 py-3 rounded-default border-0 text-[#F6F5F6]"
                            onClick={handleSubmit(submitData)}
                        >
                            {isLoading ? (
                                <ButtonLoader></ButtonLoader>
                            ) : (
                                <div className="font-semibold flex justify-center items-center gap-2">
                                    <MdLogin />
                                    Log In
                                </div>
                            )}
                        </Button>
                    </form>
                    <section className="px-10 py-0 max-w-md mx-auto">
                        <span className="continue-with px-2 relative border-1 text-center text-sm text-pry-text-color-1">
                            OR
                        </span>
                        <div className="mt-4 text-2xl flex flex-col gap-2">
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <Button
                                        className="px-4 py-1 border-1 flex justify-center items-center gap-4 border-btn-color rounded-default text-base"
                                        key={provider.name}
                                        onClick={() => signIn(provider?.id)}
                                    >
                                        <span>
                                            {provider?.name === 'Facebook' ? (
                                                <FaFacebook />
                                            ) : (
                                                <FaGoogle />
                                            )}
                                        </span>
                                        <span>{provider.name}</span>
                                    </Button>
                                ))}
                        </div>
                    </section>
                    <div className="mt-2 px-10">
                        <span>You don’t have an account? </span>
                        <Link href="/signup" className="text-[#5C73DB]">
                            Create Account
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
}
