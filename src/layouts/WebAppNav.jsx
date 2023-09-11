'use client';
import { useState, useRef, useContext, createContext } from 'react';
import Link from 'next/link';
import {
    MdPayments,
    MdSettings,
    MdHelpOutline,
    MdVideoCameraBack,
    MdEvent,
    MdMessage,
    MdDashboard,
    MdLogout,
} from 'react-icons/md';
import { FaTh } from 'react-icons/fa';
import { useCloseElementOnClick } from '@utils/useCloseElementOnClick';
import Image from 'next/image';
import { Button } from '@components/Button';
import { useAuth } from '@sections/authentication/AuthProtect';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const NavContext = createContext({});

const navigation = {
    events: [
        { name: 'Explore', icon: <MdDashboard />, href: '/events' },
        { name: 'My Events', icon: <MdEvent />, href: '/my-events' },
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
    const setOpen = useContext(NavContext);

    return (
        <nav>
            <div className="flex flex-col">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item?.href}
                        className="mb-2 px-6 py-2 flex gap-2 items-center text-[#3E384B] no-underline hover:bg-dashboard-gold"
                        onClick={() => setOpen((prev) => !prev)}
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
    const { logout } = useAuth();
    const router = useRouter();

    return (
        <div className="py-6">
            <h1 className="text-xs sm:text-lg mb-8 px-6">
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/images/deleventus-logo.svg"
                        alt="deleventus logo"
                        width={30}
                        height={30}
                        priority={true}
                    />
                    <span>Deleventus</span>
                </Link>
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
            <div className="px-6">
                <Button
                    className="py-2 w-full flex justify-center items-center gap-2 bg-purple-base font-semibold text-sm text-white rounded-default hover:text-dashboard-gold"
                    onClick={() => {
                        logout();
                        router.replace('/signin');
                    }}
                >
                    <MdLogout />
                    <span>Sign Out</span>
                </Button>
            </div>
        </div>
    );
};

const WebAppNav = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    // close the menu if clicked outside of it
    useCloseElementOnClick(ref, () => setOpen(false));

    const handleDrag = (event, info) => {
        if (info.point.x <= 20) {
            setOpen(false);
        }
    };

    return (
        <NavContext.Provider value={setOpen}>
            <section
                ref={ref}
                className="fixed left-0 top-0 bottom-0 py-0 z-50"
            >
                <div className="hidden lg:block h-full bg-white shadow-sm">
                    <NavHeaders />
                </div>

                {/* Mobile Navigation */}
                <div className="h-full">
                    <Button
                        className="lg:hidden text-xl absolute z-10 top-7 left-6"
                        onClick={() => setOpen((open) => !open)}
                    >
                        <FaTh />
                    </Button>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                drag="x"
                                dragSnapToOrigin="true"
                                dragConstraints={{ right: 0 }}
                                dragElastic={{ left: 0, right: 0 }}
                                dragMomentum={false}
                                onDrag={handleDrag}
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                }}
                                className="lg:hidden h-full relative z-20 bg-white shadow-sm"
                            >
                                <NavHeaders />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </NavContext.Provider>
    );
};

export default WebAppNav;
