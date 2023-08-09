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
import { useAuth } from './AuthProtect';
import { useMap } from 'react-use';

export default function Signup() {
    // const [first_name, setFirstname] = useState('');
    // const [last_name, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register, isAuthenticated } = useAuth();
    const [error, setError] = useState(null);
    const [form, { set }] = useMap({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });
    // const [providers, setProviders] = useState(null);
    // useEffect(() => {
    //     const getAllProviders = async () => {
    //         const response = await getProviders();
    //         setProviders(response);
    //     };
    //     getAllProviders();
    // }, []);
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const result = await register(form);
            setError(result.response.data.message);
        } catch (err) {
            return err;
        }
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
                    <h1 className="mb-1 text-2xl">Create an Account</h1>
                    <p>Please enter your details to continue</p>
                </div>
                <div className="text-red-500 mb-2">{error && error}</div>
                <form
                    onSubmit={handleSubmit}
                    className="text-pry-text-color-1 px-10 max-w-md mx-auto"
                >
                    <div>
                        <div className="relative">
                            <InputField
                                type="text"
                                placeholder="first name"
                                required
                                onChange={(first_name) =>
                                    set('first_name', first_name.target.value)
                                }
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                        <div className="relative">
                            <InputField
                                type="text"
                                placeholder="last name"
                                required
                                onChange={(last_name) =>
                                    set('last_name', last_name.target.value)
                                }
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
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
                        <div className="relative">
                            <InputField
                                type="password"
                                placeholder="password"
                                value={confirmPassword}
                                required
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
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
                    <Button className="w-full bg-btn-color mb-2 py-3 rounded-default border-0 text-[#F6F5F6]">
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
