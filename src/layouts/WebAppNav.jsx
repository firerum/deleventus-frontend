'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import {
    MdPayments,
    MdSettings,
    MdHelpOutline,
    MdVideoCameraBack,
    MdEvent,
    MdMessage,
    MdDashboard,
} from 'react-icons/md';
import { FaTh, FaBrain } from 'react-icons/fa';
import { useCloseElementOnClick } from '@utils/useCloseElementOnClick';

const navigation = {
    events: [
        { name: 'Timeline', icon: <MdDashboard />, href: '/timeline' },
        { name: 'My Events', icon: <MdEvent />, href: '/events' },
        // { name: 'Memories', icon: <FaBrain />, href: '/memories' },
        {
            name: 'Live Events',
            icon: <MdVideoCameraBack />,
            href: '/live-events',
        },
    ],
    communications: [
        { name: 'Messages', icon: <MdMessage />, href: '/communications' },
    ],
    payments: [{ name: 'Payments', icon: <MdPayments />, href: '/payments' }],
    settings: [
        { name: 'Account Settings', icon: <MdSettings />, href: '/settings' },
        { name: 'Help and Support', icon: <MdHelpOutline />, href: '/support' },
    ],
};

const NavLinks = ({ navigation }) => {
    return (
        <nav>
            <div className="flex flex-col">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item?.href}
                        className="mb-2 px-6 py-2  flex gap-2 items-center text-[#3E384B] no-underline hover:bg-dashboard-gold"
                    >
                        <span className="md:text-sm order-2 font-general">
                            {item.name}
                        </span>
                        <span className="text-lg order-1">{item.icon}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

const NavHeaders = () => {
    return (
        <div className="py-6">
            <h1 className="text-base mb-10 px-6">
                <Link href="/">Deleventus</Link>
            </h1>
            <div className="mb-4">
                <header className="mb-4 text-sm text-[#645F6E] font-medium px-6">
                    EVENTS
                </header>
                <NavLinks navigation={navigation.events} />
            </div>
            <div className="mb-4">
                <header className="mb-4 text-sm text-[#645F6E] font-medium px-6">
                    COMMUNICATION
                </header>
                <NavLinks navigation={navigation.communications} />
            </div>
            <div className="mb-4">
                <header className="mb-4 text-sm text-[#645F6E] font-medium px-6">
                    PAYMENTS
                </header>
                <NavLinks navigation={navigation.payments} />
            </div>
            <div className="mb-4">
                <header className="mb-4 text-sm text-[#645F6E] font-medium px-6">
                    SETTINGS
                </header>
                <NavLinks navigation={navigation.settings} />
            </div>
        </div>
    );
};

const WebAppNav = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    // close the menu if clicked outside of it
    useCloseElementOnClick(ref, () => setOpen(false));

    return (
        <section ref={ref}>
            <div className="hidden lg:block">
                <NavHeaders />
            </div>

            {/* Mobile Navigation */}
            <div>
                <button
                    className="lg:hidden absolute top-8 left-6"
                    onClick={() => setOpen((open) => !open)}
                >
                    <FaTh />
                </button>
                {open && (
                    <div className="lg:hidden mt-16">
                        <NavHeaders />
                    </div>
                )}
            </div>
        </section>
    );
};

export default WebAppNav;
