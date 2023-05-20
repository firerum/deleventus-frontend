import '@styles/globals.css';
import { lora, lato, inter } from '@fonts/fonts';
import Nav from '@layouts/Nav';
import Footer from '@layouts/Footer';
import Provider from '@authentication/Provider';

export const metadata = {
    title: 'Deliciae Eventus - Deleventus',
    description: 'Create Luxury Events',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="container">
                    <Nav></Nav>
                    {children}
                    <Footer></Footer>
                </div>
            </body>
        </html>
    );
}
