import Link from 'next/link';

const navigation = {
    product: [
        { name: 'Virtual Event', href: '/' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Web App', href: '#' },
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
            icon: '',
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/deleventus',
            icon: '',
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/deleventus',
        },
    ],
};

const FooterLinks = ({ navigation }) => {
    return (
        <ul className="flex flex-col">
            {navigation.map((item) => (
                <li key={item.name} className="mb-4">
                    <Link href={item?.href}>
                        <span>{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const Footer = () => {
    return (
        <footer className="py-6 px-5">
            <h1 className="text-white">Deleventus</h1>
            <section className="py-14 text-pry-purple grid grid-cols-2 justify-center gap-16 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                <div>
                    <header className=''>Product</header>
                    <FooterLinks navigation={navigation.product} />
                </div>
                <div>
                    <header>Integration</header>
                    <FooterLinks navigation={navigation.integration} />
                </div>
                <div>
                    <header>Support</header>
                    <FooterLinks navigation={navigation.support} />
                </div>
                <div>
                    <header>Company</header>
                    <FooterLinks navigation={navigation.company} />
                </div>
            </section>
            <section className="bg-pry-purple text-center">
                <div>
                    <p>
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="">
                            {/* <span>{item.name}</span> */}
                        </a>
                    ))}
                </div>
            </section>
        </footer>
    );
};

export default Footer;
