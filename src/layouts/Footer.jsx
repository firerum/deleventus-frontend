import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const navigation = {
    product: [
        { name: 'Virtual Event', href: '/' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Web App', href: '/timeline' },
        { name: 'Receipt and Invoicing', href: '#' },
    ],
    integration: [
        { name: 'Google Map', href: '' },
        { name: 'Google Calendar', href: '' },
        { name: 'Payment Gateways', href: '' },
        { name: 'Apps and Integrations', href: '' },
    ],
    support: [
        { name: 'Contact Us', href: '' },
        { name: 'FAQs', href: '' },
        { name: 'Live Chat', href: '' },
    ],
    company: [
        { name: 'About Us', href: '' },
        { name: 'Teams', href: '' },
        { name: 'Careers', href: '' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://facebook.com/deleventus',
            icon: <FaFacebookF />,
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/deleventus',
            icon: <FaInstagram />,
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/deleventus',
            icon: <FaTwitter />,
        },
    ],
};

const FooterLinks = ({ navigation }) => {
    return (
        <ul className="flex flex-col">
            {navigation.map((item) => (
                <li key={item.name} className="mb-4 sm:text-sm">
                    <Link
                        href={item?.href}
                        className="hover:text-dashboard-gold"
                    >
                        <span>{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const Footer = () => {
    return (
        <footer className="py-8 px-10 md:px-16">
            <Image
                src="/images/deleventus-logo-white-wordmark.svg"
                alt="deleventus logo"
                width={40}
                height={40}
                priority={true}
                className="w-56 h-16"
            />
            <section className="py-14 text-pry-purple grid grid-cols-2 gap-16 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                <div>
                    <header className="mb-6">Product</header>
                    <FooterLinks navigation={navigation.product} />
                </div>
                <div>
                    <header className="mb-6">Integration</header>
                    <FooterLinks navigation={navigation.integration} />
                </div>
                <div>
                    <header className="mb-6">Support</header>
                    <FooterLinks navigation={navigation.support} />
                </div>
                <div>
                    <header className="mb-6">Company</header>
                    <FooterLinks navigation={navigation.company} />
                </div>
            </section>
            <section className="bg-pry-purple p-10 lg:py-6 text-center md:px-16 lg:flex justify-between -mx-10 md:-mx-16">
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                <div className="flex flex-col gap-4 py-8 lg:py-0 xl:py-0 lg:flex-row">
                    <Link href="#">Terms of Services</Link>
                    <Link href="#">Privacy Policy</Link>
                </div>
                <div className="flex justify-center gap-4 text-lg">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="ml-2">
                            <span>{item?.icon}</span>
                        </a>
                    ))}
                </div>
            </section>
        </footer>
    );
};

export default Footer;
