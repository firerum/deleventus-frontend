import React from 'react';
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
    return (
        <header>
            <h1>Deleventus</h1>
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
        </header>
    );
};

export default Nav;
