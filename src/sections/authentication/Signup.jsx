'use client';
import { useState, useEffect } from 'react';
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
import Link from 'next/link';
import { useAuth } from './AuthProtect';
import { useMap } from 'react-use';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ButtonLoader } from '@components/Spinner';
import { useForm } from 'react-hook-form';

export default function Signup() {
    const { register: reg, isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const [form, { set }] = useMap({ email: '', password: '' });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSubmition = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const result = await reg(form);
            if (result) {
                setErrorMessage(result.response.data.message);
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
        <section className="text-center lg:flex overflow-hidden">
            <div className="hidden h-screen lg:block form w-1/2"></div>
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
                <div className="mb-10">
                    <h1 className="mb-1 text-2xl">Create an Account</h1>
                    <p>Please enter your details to continue</p>
                </div>
                <div className="text-red-500 mb-2 mt-0 max-w-md mx-auto">
                    {errorMessage && errorMessage}
                </div>
                <form
                    onSubmit={handleSubmit((data) => console.log(data))}
                    className="text-pry-text-color-1 px-10 max-w-md mx-auto"
                >
                    <div>
                        <div className="relative">
                            <InputField
                                type="email"
                                placeholder="email"
                                required
                                onChange={(email) =>
                                    set('email', email.target.value)
                                }
                                {...register('email', {
                                    required: 'Email must not be empty',
                                    minLength: {
                                        value: 3,
                                        message: 'Minimum length of 3',
                                    },
                                })}
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
                                onChange={(password) =>
                                    set('password', password.target.value)
                                }
                                {...register('password', {
                                    required: 'Password must not be empty',
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum length of 6',
                                    },
                                })}
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
                                onChange={(e) =>
                                    set('ConfirmPassword', e.target.value)
                                }
                                {...register('confirmPassword', {
                                    required: 'Password must not be empty',
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum length of 6',
                                    },
                                })}
                                errors={errors}
                            />
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                                <FaLock />
                            </span>
                        </div>
                        <div className="flex gap-4 mb-2">
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
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button className="w-full bg-btn-color mb-2 py-3 rounded-default border-0 text-[#F6F5F6]">
                        {loading ? (
                            <ButtonLoader></ButtonLoader>
                        ) : (
                            <div className="font-semibold">Create Account</div>
                        )}
                    </Button>
                </form>
                <div className="mb-4">
                    <span>Already have an account? </span>
                    <Link href="/signin" className="text-[#5C73DB]">
                        Log In
                    </Link>
                </div>
                <section>
                    <header className="continue-with block max-w-md mx-auto relative text-sm text-pry-text-color-1">
                        OR <br />
                        CONTINUE WITH
                    </header>
                    <div className="mt-4 text-2xl">
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

// const [providers, setProviders] = useState(null);
// useEffect(() => {
//     const getAllProviders = async () => {
//         const response = await getProviders();
//         setProviders(response);
//     };
//     getAllProviders();
// }, []);
