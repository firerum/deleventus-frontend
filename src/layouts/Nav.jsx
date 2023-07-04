'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from 'next/image';
import { Button } from '@components/Button';

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
        <header className="px-6 flex justify-between border-solid border-2">
            <h1 className="flex justify-between text-lg">
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
            <nav className="hidden lg:block">
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
            <section>
                <Button
                    title="Sign In"
                    padVertical="1rem"
                    padSide="1rem"
                    className="text-xs"
                />
            </section>

            {/* mobile navigation */}
        </header>
    );
};

export default Nav;
