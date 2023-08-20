import '@styles/globals.css';
import WebAppNav from '@layouts/WebAppNav';
import Provider from '@sections/authentication/Provider';
import { Satoshi, General } from '../../../public/fonts/fonts.local';
import WebAppHeader from '@layouts/WebAppHeader';
import { AuthProvider } from '@sections/authentication/AuthProtect';
import { ProtectRoute } from '@sections/authentication/ProtectRoute';

export const metadata = {
    title: 'Deliciae Eventus - Deleventus',
    description: 'Create Luxury Events',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${Satoshi.variable} ${General.variable}`}>
            <body className="bg-pry-purple">
                {/* <Provider> */}
                <AuthProvider>
                    <ProtectRoute>
                        <div>
                            <WebAppNav />
                            <div className="lg:pl-56 min-h-screen overflow-clip">
                                <WebAppHeader />
                                <div className="pt-20">{children}</div>
                            </div>
                        </div>
                    </ProtectRoute>
                </AuthProvider>
                {/* </Provider> */}
            </body>
        </html>
    );
}
