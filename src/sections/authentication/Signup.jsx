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
    FaUser,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Signup() {
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    // const [providers, setProviders] = useState(null);
    // useEffect(() => {
    //     const getAllProviders = async () => {
    //         const response = await getProviders();
    //         setProviders(response);
    //     };
    //     getAllProviders();
    // }, []);

    return (
        <section className="form py-24 text-center md:px-16">
            <div className="bg-white text-center py-12 max-w-3xl mx-auto rounded-md">
                <div className="mb-12">
                    <h1 className="mb-1">Create an Account</h1>
                    <p>Please enter your details to continue</p>
                </div>
                <form className="text-pry-text-color-1 px-10 max-w-md mx-auto">
                    <div>
                        <div className="relative">
                            <InputField
                                type="text"
                                value={firstname}
                                placeholder="first name"
                                required
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                        <div className="relative">
                            <InputField
                                type="text"
                                value=""
                                placeholder="last name"
                                required
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                        <div className="relative">
                            <InputField
                                type="email"
                                value=""
                                placeholder="email"
                                required
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaEnvelope />
                            </span>
                        </div>
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
                        <div className="flex gap-4 mb-6">
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
                    <Button className="w-full bg-btn-color mb-2 border-0 text-[#F6F5F6]">
                        Create Account
                    </Button>
                </form>
                <div className="mb-8">
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
                    <div className="flex gap-6 justify-center mt-6 text-2xl">
                        <Button>
                            <FaFacebook />
                        </Button>
                        <Button>
                            <FaTwitter />
                        </Button>
                        <Button>
                            <FaGoogle />
                        </Button>
                    </div>
                </section>
            </div>
        </section>
    );
}