import localFont from 'next/font/local';

export const Satoshi = localFont({
    variable: '--font-satoshi',
    fallback: ['system-ui', 'arial'],
    src: [
        {
            path: '/satoshi/Satoshi-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '/satoshi/Satoshi-Bold.woff2',
            weight: '700',
            style: 'normal',
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
    variable: '--font-general-sans',
    fallback: ['system-ui', 'arial'],
    src: [
        {
            path: '/general-sans/GeneralSans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '/general-sans/GeneralSans-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '/general-sans/GeneralSans-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '/general-sans/GeneralSans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
});
