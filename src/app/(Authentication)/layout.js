import '@styles/globals.css';
import { Satoshi, General } from '../../../public/fonts/fonts.local';
import { AuthProvider } from '@sections/authentication/AuthProtect';
import Provider from '@sections/authentication/Provider';
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
                    <AuthProvider>{children}</AuthProvider>
                </ProvideQueryClient>
            </body>
        </html>
    );
}
