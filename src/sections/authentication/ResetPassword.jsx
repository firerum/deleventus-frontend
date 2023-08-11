'use client';
import { useState } from 'react';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';
import { FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function ResetPassword() {
    const [email, setEmail] = useState('');

    return (
        <section className="text-center lg:flex">
            <div className="hidden lg:block h-screen form pt-24 w-1/2"></div>
            <div className="bg-white pt-24 lg:w-1/2 text-center py-12 max-w-3xl mx-auto rounded-md">
                <span className="inline-block m-auto">
                    <Image
                        src="/images/logo-full-color.svg"
                        alt="deleventus logo"
                        width={40}
                        height={40}
                        priority={true}
                        className="w-56 h-16"
                    />
                </span>
                <div className="mb-12">
                    <h1 className="mb-1 text-2xl">Forgot Password</h1>
                    <p className="px-10 max-w-lg mx-auto">
                        Enter the email address associated with your account.
                        We'll send a reset link to verify your identity
                    </p>
                </div>
                <form className="text-pry-text-color-1 px-10 max-w-md mx-auto">
                    <div>
                        <div className="relative">
                            <InputField
                                type="email"
                                value={email}
                                placeholder="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaEnvelope />
                            </span>
                        </div>
                    </div>
                    <Button className="w-full bg-btn-color my-4 py-3 rounded-default border-0 text-[#F6F5F6]">
                        Send Reset Link
                    </Button>
                    <Link href="/signin" className="w-full text-[#5C73DB]">
                        Back to Log In
                    </Link>
                </form>
            </div>
        </section>
    );
}
