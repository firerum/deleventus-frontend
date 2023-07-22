'use client';
import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    const paths = ['/signin', '/signup', '/dashboard', '/reset-password'];
    console.log(pathname)

    return (
        <>
            {paths.includes(pathname) ? (
                children
            ) : (
                <>
                    <Nav />
                    {children}
                    <Footer />
                </>
            )}
        </>
    );
};
