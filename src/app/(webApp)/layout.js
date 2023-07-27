import '@styles/globals.css';
import WebAppNav from '@layouts/WebAppNav';
import Provider from '@sections/authentication/Provider';
import { Satoshi, General } from '../../../public/fonts/fonts.local';
import WebAppHeader from '@layouts/WebAppHeader';

export const metadata = {
    title: 'Deliciae Eventus - Deleventus',
    description: 'Create Luxury Events',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${Satoshi.variable} ${General.variable}`}>
            <body className="bg-pry-purple">
                <Provider>
                    <div>
                        <div className="fixed left-0 top-0 bottom-0 bg-white z-50 shadow-sm">
                            <WebAppNav />
                        </div>
                        <div className="lg:pl-56 min-h-screen overflow-hidden">
                            <WebAppHeader />
                            {children}
                        </div>
                    </div>
                </Provider>
            </body>
        </html>
    );
}
