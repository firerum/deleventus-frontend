'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from 'next/image';
import { Button } from '@components/Button';
import { FaBars } from 'react-icons/fa';

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
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const getAllProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        };
        getAllProviders();
    }, []);

    return (
        <header className="px-6 py-3 md:px-10 text-sm md:text-base bg-pry-purple shadow-sm fixed left-0 top-0 right-0 flex justify-between items-center">
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
                <ul className="grid grid-cols-4 gap-2">
                    {navigation.map((nav) => (
                        <li key={nav.name}>
                            <Link href={nav.href}>
                                <span>{nav.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="py-2 px-6 ml-auto text-pry-purple rounded-sm bg-btn-color">
                Sign In
            </button>
            <button className="ml-4 text-2xl lg:hidden">
                <FaBars />
            </button>

            {/* mobile navigation */}
        </header>
    );
};

export default Nav;
