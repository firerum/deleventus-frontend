'use client';
import { useState, useEffect } from 'react';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';
import { signIn, useSession, getProviders } from 'next-auth/react';
import {
    FaTwitter,
    FaGoogle,
    FaFacebook,
    FaLock,
    FaEnvelope,
} from 'react-icons/fa';
import Link from 'next/link';
import { useAuth } from './AuthProtect';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ButtonLoader } from '@components/Spinner';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '@utils/validation/validateUser';
import { useMutation } from '@tanstack/react-query';
import ResendVerificationLink from './ResendVerificationLink';

export default function Signup() {
    const { register: reg, isAuthenticated } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [providers, setProviders] = useState(null);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(signUpSchema),
    });

    useEffect(() => {
        const getAllProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        };
        getAllProviders();
    }, []);

    const { isError, isLoading, mutate, isSuccess } = useMutation({
        mutationFn: (data) => {
            return reg(data);
        },
        onError: (error) => {
            setErrorMessage(error.response.data?.message);
        },
        onSuccess: (data) => {
            alert(data.data.message);
        },
    });

    const submitData = (data) => {
        if (data.password !== data.confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }
        setUserEmail(data?.email);
        mutate(data);
    };

    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/events');
            return;
        }
    }, [isAuthenticated]);

    return (
        <section className="text-center lg:flex overflow-hidden">
            <div className="h-screen hidden lg:block form w-1/2"></div>
            {isSuccess ? (
                <ResendVerificationLink email={userEmail} />
            ) : (
                <div className="bg-white lg:w-1/2 text-center pb-12 pt-10 max-w-3xl mx-auto rounded-md">
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
                        <h1 className="mb-1 text-2xl">Create an Account</h1>
                        <p>Please enter your details to continue</p>
                    </div>

                    <div className="text-red-500 mb-2 mt-0 max-w-md mx-auto">
                        {errorMessage && errorMessage}
                    </div>
                    <form
                        onSubmit={handleSubmit(submitData)}
                        className="text-pry-text-color-1 px-10 max-w-md mx-auto"
                    >
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

                            <InputField
                                type="password"
                                placeholder="confirm password"
                                required
                                {...register('confirmPassword')}
                                errors={errors}
                            >
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                                    <FaLock />
                                </span>
                            </InputField>

                            <div className="flex gap-4">
                                <label htmlFor="" className="order-2">
                                    I accept the{' '}
                                    <Link href="/" className="text-[#5C73DB]">
                                        terms and conditions
                                    </Link>{' '}
                                    of use
                                </label>
                                <InputField
                                    type="checkbox"
                                    name=""
                                    id=""
                                    onChange={(e) =>
                                        console.log(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <Button className="w-full bg-btn-color mb-2 py-3 rounded-default border-0 text-[#F6F5F6]">
                            {isLoading ? (
                                <ButtonLoader></ButtonLoader>
                            ) : (
                                <div className="font-semibold">
                                    Create Account
                                </div>
                            )}
                        </Button>
                    </form>
                    <section className="px-10 py-0 max-w-md mx-auto">
                        <span className="continue-with relative px-2 border-1 text-sm text-pry-text-color-1">
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
                    <div className="mt-2">
                        <span>Already have an account? </span>
                        <Link href="/signin" className="text-[#5C73DB]">
                            Log In
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
}
