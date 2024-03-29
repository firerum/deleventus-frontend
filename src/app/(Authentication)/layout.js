import '@styles/globals.css';
import { Satoshi, General } from '../../../public/fonts/fonts.local';
import { AuthProvider } from '@sections/authentication/AuthProtect';
import { ProvideQueryClient } from '@helper/ProvideQueryClient';
import HideOrShowAuthPage from '@sections/authentication/HideOrShowAuthPage';

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
                        <HideOrShowAuthPage>{children}</HideOrShowAuthPage>
                    </AuthProvider>
                </ProvideQueryClient>
            </body>
        </html>
    );
}
