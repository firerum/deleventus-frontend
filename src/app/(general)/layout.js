import '@styles/globals.css';
import Nav from '@layouts/Nav';
import Footer from '@layouts/Footer';
import Provider from '@sections/authentication/Provider';
import { Satoshi, General } from '../../../public/fonts/fonts.local';

export const metadata = {
    title: 'Deliciae Eventus - Deleventus',
    description: 'Create Luxury Events',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${Satoshi.variable} ${General.variable}`}>
            <body>
                <Provider>
                    <div>
                        <Nav />
                        {children}
                        <Footer />
                    </div>
                </Provider>
            </body>
        </html>
    );
}
