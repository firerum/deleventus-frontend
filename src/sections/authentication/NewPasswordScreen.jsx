'use client';
import { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { Button } from '@components/Button';
import { InputField } from '@components/InputField';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function NewPasswordScreen() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const searchParams = useSearchParams();
    // console.log('this is the token', searchParams.get('token'));

    return (
        <section className="text-center lg:flex">
            <div className="hidden lg:block h-screen form w-1/2"></div>
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
                    <h1 className="mb-1 text-2xl">Set New Password</h1>
                    <p className="px-10">
                        Create a new password for your account. Make sure it's
                        secure, memorable and different from the previous
                        password you have used.
                    </p>
                </div>
                <form className="text-pry-text-color-1 px-10 max-w-md mx-auto">
                    <div className="relative">
                        <InputField
                            type="password"
                            placeholder="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                            <FaLock />
                        </span>
                    </div>
                    <div className="relative">
                        <InputField
                            type="password"
                            placeholder="confirm password"
                            value={confirmPassword}
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                            <FaLock />
                        </span>
                    </div>
                    <Button className="w-full bg-btn-color my-4 py-3 rounded-default border-0 text-[#F6F5F6]">
                        Reset Password
                    </Button>
                    <Link href="/signin" className="w-full">
                        Back to Log In
                    </Link>
                </form>
            </div>
        </section>
    );
}
