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
import Link from 'next/link';
import { useAuth } from './AuthProtect';
import { useMap } from 'react-use';

export default function Signin() {
    const { login, isAuthenticated } = useAuth();
    const [form, { set }] = useMap({
        email: '',
        password: '',
    });
    const router = useRouter();
    // console.log(isAuthenticated)

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(form);
    };

    if (isAuthenticated) {
        router.push('/');
        return;
    }

    return (
        <section className="text-center lg:flex">
            <div className="hidden lg:block form pt-24 w-1/2"></div>
            <div className="bg-white pt-24 lg:w-1/2 text-center py-12 max-w-3xl mx-auto rounded-md">
                <div className="mb-12">
                    <h1 className="mb-1 text-2xl">Welcome Back</h1>
                    <p>Please enter your details to Log In</p>
                </div>
                <form
                    // onSubmit={handleSubmit}
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
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
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
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaLock />
                            </span>
                        </div>
                        <div className="flex gap-4 mb-6">
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
                        onClick={handleSubmit}
                    >
                        Log In
                    </Button>
                </form>
                <div className="mb-8 px-10">
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
