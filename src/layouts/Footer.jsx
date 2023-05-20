import Link from 'next/link';

const navigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Policy', href: '/policy' },
        { name: 'Team', href: '/team' },
        { name: 'Partners', href: '#' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
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

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    {navigation.main.map((item) => (
                        <li key={item.name} className="px-5 py-2">
                            <Link href={item.href}>
                                {/* <span>{item.name}</span> */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="">
                        {/* <span>{item.name}</span> */}
                    </a>
                ))}
            </div>
            <p>
                &copy; {new Date().getFullYear()} A product of Nerdiphyte, Inc.
                All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
