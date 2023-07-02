import '@styles/globals.css';
import { nunito } from '../../public/fonts/fonts';
import Nav from '@layouts/Nav';
import Footer from '@layouts/Footer';
import Provider from '@authentication/Provider';
import { ThemeProvider } from 'styled-components';

// global themes for the styled component
// const theme = {
//     colors: {
//         header: '',
//         body: '',
//         footer: '',
//     },
// };

export const metadata = {
    title: 'Deliciae Eventus - Deleventus',
    description: 'Create Luxury Events',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <Provider>
                    <div>
                        <Nav></Nav>
                        {children}
                        <Footer></Footer>
                    </div>
                </Provider>
            </body>
        </html>
    );
}
