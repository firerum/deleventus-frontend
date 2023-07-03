import localFont from 'next/font/local';

export const Satoshi = localFont({
    src: [
        {
            path: '/satoshi/Satoshi-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '/satoshi/Satoshi-Bold.woff2',
            weight: '700',
            style: '',
        },
        {
            path: '/satoshi/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '/satoshi/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },

        {
            path: '/satoshi/Satoshi-Light.woff2',
            weight: '300',
            style: 'normal',
        },
    ],
});

export const General = localFont({
    src: [
        {
            path: '/general-sans/GeneralSans-Bold.woff2',
            weight: '700',
            style: 'normal',
            variable: '--font-general-sans',
        },
        {
            path: '/general-sans/GeneralSans-Medium.woff2',
            weight: '500',
            style: 'normal',
            variable: '--font-general-sans',
        },
        {
            path: '/general-sans/GeneralSans-Regular.woff2',
            weight: '400',
            style: 'normal',
            variable: '--font-general-sans',
        },
    ],
});
