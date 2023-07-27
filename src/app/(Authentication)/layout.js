import '@styles/globals.css';
import { Satoshi, General } from '../../../public/fonts/fonts.local';

export const metadata = {
    title: 'Deliciae Eventus - Deleventus',
    description: 'Create Luxury Events',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${Satoshi.variable} ${General.variable}`}>
            <body>{children}</body>
        </html>
    );
}
