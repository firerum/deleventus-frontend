import { useState } from 'react';
import Link from 'next/link';
import {
    MdPayments,
    MdSettings,
    MdHelpOutline,
    MdVideoCameraBack,
    MdEvent,
    MdMessage,
} from 'react-icons/md';
import { FaTh, FaBrain } from 'react-icons/fa';

const navigation = {
    events: [
        { name: 'My Events', icon: <MdEvent />, href: '' },
        { name: 'Memories', icon: <FaBrain />, href: '' },
        { name: 'Live Events', icon: <MdVideoCameraBack />, href: '' },
    ],
    communications: [{ name: 'Messages', icon: <MdMessage />, href: '' }],
    payments: [{ name: 'Payments', icon: <MdPayments />, href: '' }],
    settings: [
        { name: 'Account Settings', icon: <MdSettings />, href: '' },
        { name: 'Help and Support', icon: <MdHelpOutline />, href: '' },
    ],
};

const NavLinks = ({ navigation }) => {
    return (
        <ul className="flex flex-col">
            {navigation.map((item) => (
                <li
                    key={item.name}
                    className="mb-6 sm:text-sm flex gap-2 items-center"
                >
                    <Link
                        href={item?.href}
                        className="text-xs md:text-sm font-general text-[#3E384B] order-2 no-underline hover:font-medium"
                    >
                        <span>{item.name}</span>
                    </Link>
                    <span className="order-1 text-lg">{item.icon}</span>
                </li>
            ))}
        </ul>
    );
};

const WebAppNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <section>
            <div className="hidden lg:block">
                <h1 className="text-base mb-10">
                    <Link href="/">Deleventus</Link>
                </h1>
                <div className="mb-4">
                    <header className="mb-4 text-sm">EVENTS</header>
                    <NavLinks navigation={navigation.events} />
                </div>
                <div className="mb-4">
                    <header className="mb-4 text-sm">COMMUNICATION</header>
                    <NavLinks navigation={navigation.communications} />
                </div>
                <div className="mb-4">
                    <header className="mb-4 text-sm">PAYMENTS</header>
                    <NavLinks navigation={navigation.payments} />
                </div>
                <div className="mb-4">
                    <header className="mb-4 text-sm">SETTINGS</header>
                    <NavLinks navigation={navigation.settings} />
                </div>
            </div>

            {/* Mobile Navigation */}
            <div>
                <button
                    className="lg:hidden"
                    onClick={() => setOpen((open) => !open)}
                >
                    <FaTh />
                </button>
                {open && (
                    <div className="lg:hidden">
                        <h1 className="text-base mb-10">
                            <Link href="/">Deleventus</Link>
                        </h1>
                        <div className="mb-4">
                            <header className="mb-4 text-sm">EVENTS</header>
                            <NavLinks navigation={navigation.events} />
                        </div>
                        <div className="mb-4">
                            <header className="mb-4 text-sm">
                                COMMUNICATION
                            </header>
                            <NavLinks navigation={navigation.communications} />
                        </div>
                        <div className="mb-4">
                            <header className="mb-4 text-sm">PAYMENTS</header>
                            <NavLinks navigation={navigation.payments} />
                        </div>
                        <div className="mb-4">
                            <header className="mb-4 text-sm">SETTINGS</header>
                            <NavLinks navigation={navigation.settings} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WebAppNav;
