import '@styles/globals.css';
import Nav from '@layouts/Nav';
import Footer from '@layouts/Footer';
import Provider from '@authentication/Provider';
import { Satoshi } from '../../public/fonts/fonts.local';

export const metadata = {
    title: 'Deliciae Eventus - Deleventus',
    description: 'Create Luxury Events',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={Satoshi.className}>
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
