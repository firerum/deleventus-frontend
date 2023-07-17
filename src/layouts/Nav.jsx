'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Pricing', href: '/pricing' },
];

const dropDown = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Settings', href: '/settings' },
    { name: 'Signout' },
];

const Nav = () => {
    // const [providers, setProviders] = useState(null);
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     const getAllProviders = async () => {
    //         const response = await getProviders();
    //         setProviders(response);
    //     };
    //     getAllProviders();
    // }, []);

    return (
        <header className="px-6 py-3 md:px-10 text-sm md:text-base bg-pry-purple shadow-sm fixed z-10 left-0 top-0 right-0 flex justify-between items-center">
            <h1 className="flex justify-between mb-0 text-lg">
                <Link href="/">
                    {/* <Image
                    src="/images/universal_DP.jpeg"
                    alt="deleventus logo"
                    width={30}
                    height={30}
                /> */}
                    <p>Deleventus</p>
                </Link>
            </h1>
            <nav className="hidden ml-auto lg:block font-medium">
                <ul className="grid grid-cols-4 gap-8">
                    {navigation.map((nav) => (
                        <li key={nav.name} className="text-pry-header-title">
                            <Link href={nav.href}>
                                <span>{nav.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* <select name="" id="">
                <option value=""></option>
            </select> */}

            <div className="ml-auto flex items-center gap-4 font-medium ">
                <Link href="/signin" className="py-2">
                    Sign In
                </Link>
                <Link
                    href="signup"
                    className="py-2 px-6 text-pry-purple bg-btn-color rounded-default sm:hidden md:block "
                >
                    Get Started
                </Link>
            </div>

            {/* mobile navigation */}
            <button
                className="text-2xl ml-4 text-center font-light lg:hidden"
                onClick={() => setOpen((open) => !open)}
            >
                <FaBars />
            </button>
            <div
                className={`text-lg px-6 md:px-10 bg-pry-purple font-medium absolute left-0 top-full w-screen z-10 lg:hidden overflow-hidden transition-[height] duration-500 ${
                    open ? 'h-screen' : 'h-0'
                }`}
            >
                <nav>
                    <ul className="grid py-6">
                        {navigation.map((nav) => (
                            <li
                                key={nav.name}
                                className="text-pry-header-title border-b-2 py-4"
                            >
                                <Link
                                    href={nav.href}
                                    onClick={() => setOpen((open) => !open)}
                                >
                                    <span>{nav.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="text-center font-medium grid pt-6">
                    <Link
                        href="signin"
                        className="py-3 px-6 mb-4 w-full rounded-default border-1 border-btn-color"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="py-3 px-6 w-full rounded-default text-pry-purple bg-btn-color"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Nav;
