'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ulVariants, liVariants } from '@utils/framer-motion/variants';
import { useAuth } from '@sections/authentication/AuthProtect';
import { Button } from '@components/Button';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Contact', href: '#' },
    { name: 'Pricing', href: '/pricing' },
];

const dropDown = [{ name: 'Dashboard', href: '/dashboard' }];

const Nav = () => {
    const { isAuthenticated, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    return (
        <header className="px-6 py-3 md:px-10 text-sm md:text-base bg-pry-purple shadow-sm fixed z-30 left-0 top-0 right-0 flex justify-between items-center">
            <h1 className="mb-0 text-xs sm:text-lg">
                <Link
                    href="/"
                    className="flex justify-between items-center gap-1"
                >
                    <Image
                        src="/images/deleventus-logo.svg"
                        alt="deleventus logo"
                        width={30}
                        height={30}
                        priority={true}
                    />
                    <p className="text-purple-base">Deleventus</p>
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

            <div className="ml-auto">
                {isAuthenticated ? (
                    <div className="ml-auto flex text-base items-center gap-4 font-medium">
                        <Button
                            className="py-2 text-base font-semibold"
                            onClick={() => logout()}
                        >
                            Sign out
                        </Button>
                        <Link
                            href="/timeline"
                            className="py-2 px-6 text-pry-purple bg-btn-color rounded-default hidden md:block"
                        >
                            Dashboard
                        </Link>
                    </div>
                ) : (
                    <div className="ml-auto flex text-base items-center gap-4 font-medium">
                        <Link href="/signin" className="py-2 font-semibold">
                            Sign In
                        </Link>
                        <Link
                            href="signup"
                            className="py-2 px-6 text-pry-purple bg-btn-color rounded-default hidden md:block"
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile Navigation */}
            <Button
                className="text-2xl ml-4 text-center font-light lg:hidden"
                onClick={() => setOpen((open) => !open)}
            >
                {open ? <FaTimes /> : <FaBars />}
            </Button>
            <div
                className={`text-lg px-6 md:px-10 bg-pry-purple font-medium absolute left-0 top-full w-screen z-10 lg:hidden overflow-hidden transition-[height] duration-500 ${
                    open ? 'h-screen' : 'h-0 delay-300'
                }`}
            >
                <motion.nav
                    initial={false}
                    animate={open ? 'open' : 'closed'}
                    ref={navRef}
                >
                    <motion.ul variants={ulVariants} className="grid py-6">
                        {navigation.map((nav) => (
                            <motion.li
                                key={nav.name}
                                className="text-pry-header-title border-b-1 py-4"
                                variants={liVariants}
                            >
                                <Link
                                    href={nav.href}
                                    onClick={() => setOpen((open) => !open)}
                                >
                                    <span>{nav.name}</span>
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <div>
                        {isAuthenticated ? (
                            <Button
                                className="py-3 px-6 mb-4 w-full rounded-default border-1 border-btn-color"
                                onClick={() => logout()}
                            >
                                Sign Out
                            </Button>
                        ) : (
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
                        )}
                    </div>
                </motion.nav>
            </div>
        </header>
    );
};

export default Nav;
