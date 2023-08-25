import '@styles/globals.css';
import Nav from '@layouts/Nav';
import Footer from '@layouts/Footer';
import Provider from '@sections/authentication/Provider';
import { AuthProvider } from '@sections/authentication/AuthProtect';
import { Satoshi, General } from '../../../public/fonts/fonts.local';
import { ProvideQueryClient } from '@helper/ProvideQueryClient';

export const metadata = {
    title: 'Deliciae Eventus - Deleventus',
    description: 'Create Luxury Events',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${Satoshi.variable} ${General.variable}`}>
            <body>
                <ProvideQueryClient>
                    <AuthProvider>
                        <div>
                            <Nav />
                            {children}
                            <Footer />
                        </div>
                    </AuthProvider>
                </ProvideQueryClient>
            </body>
        </html>
    );
}
