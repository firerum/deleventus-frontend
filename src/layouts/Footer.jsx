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
        <ul>
            {navigation.map((item) => (
                <li key={item.name} className="px-5 py-2">
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
        <footer className='w-full bg-black'>
            <h1>Deleventus</h1>
            <section>
                <div>
                    <header>Product</header>
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
            <section>
                <div>
                    <p>
                        &copy; {new Date().getFullYear()} A product of
                        Nerdiphyte, Inc. All rights reserved.
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
