'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from 'next/image';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Streams', href: '/live' },
    { name: 'Products', href: '/products' },
    { name: 'Company', href: '/company' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About', href: '/about' },
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
        <header>
            <div>
                <Image
                    src="/images/universal_DP.jpeg"
                    alt="deleventus logo"
                    width={30}
                    height={30}
                />
                <h1>Deleventus</h1>
            </div>
            <nav>
                <ul>
                    {navigation.map((nav) => (
                        <li key={nav.name}>
                            <Link href={nav.href}>
                                <span>{nav.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* mobile navigation */}
        </header>
    );
};

export default Nav;
