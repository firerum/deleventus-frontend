'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import {
    FaTwitter,
    FaGoogle,
    FaFacebook,
    FaLock,
    FaEnvelope,
} from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import Link from 'next/link';
import { useAuth } from './AuthProtect';
import { ButtonLoader } from '@components/Spinner';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    })
    .required();

export default function Signin() {
    const { login, isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
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
        resolver: yupResolver(schema),
    });

    const submitData = async (data) => {
        setLoading(true);
        try {
            const response = await login(data);
            if (response) {
                setErrorMessage(response.data.message);
                setLoading(false);
            }
        } catch (err) {
            setErrorMessage(err.response.data.message);
            setTimeout(setErrorMessage, 7000);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/timeline');
            return;
        }
    }, [isAuthenticated]);

    return (
        <section className="text-center lg:flex">
            <div className="hidden h-screen lg:flex form w-1/2"></div>
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
                <div className="mb-10">
                    <h1 className="mb-1 text-2xl">Welcome Back</h1>
                    <p>Please enter your details to Log In</p>
                </div>
                {errorMessage && (
                    <div className="text-red-500 mb-2 max-w-md mx-auto">
                        {errorMessage}
                    </div>
                )}
                <form className="text-pry-text-color-1 px-10 max-w-md mx-auto">
                    <div>
                        <div className="relative">
                            <InputField
                                type="email"
                                placeholder="email"
                                required
                                {...register('email')}
                                errors={errors}
                            />
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                                <FaEnvelope />
                            </span>
                        </div>
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
                        <div className="flex gap-4 mb-2">
                            <label htmlFor="" className="order-2">
                                Remember me
                            </label>
                            <InputField
                                type="checkbox"
                                name=""
                                id=""
                                onChange={(e) => console.log(e.target.value)}
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
                        {loading ? (
                            <ButtonLoader></ButtonLoader>
                        ) : (
                            <div className="font-semibold flex justify-center items-center gap-2">
                                <MdLogin />
                                Log In
                            </div>
                        )}
                    </Button>
                </form>
                <div className="mb-4 px-10">
                    <span>You don’t have an account? </span>
                    <Link href="/signup" className="text-[#5C73DB]">
                        Create Account
                    </Link>
                </div>
                <section>
                    <header className="continue-with block max-w-md mx-auto relative text-sm text-pry-text-color-1">
                        OR <br />
                        CONTINUE WITH
                    </header>
                    <div className="mt-6 text-2xl">
                        <Button className="border-0 px-4">
                            <FaFacebook />
                        </Button>
                        <Button className="border-0 px-4">
                            <FaTwitter />
                        </Button>
                        <Button className="border-0 px-4">
                            <FaGoogle />
                        </Button>
                    </div>
                </section>
            </div>
        </section>
    );
}
