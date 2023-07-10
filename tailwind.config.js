/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ['var(--font-satoshi)'],
                general: ['var(--font-general-sans)'],
            },
            colors: {
                'purple-base': '#29194A',
                'pry-purple': '#F9F7FE',
                'secondary-purple': '#E7DDFB',
                'pry-text-color-1': '#807C89',
                'pry-text-color-2': '#585264',
                'pry-header-title': '#140C24',
                'btn-color': '#786995',
                'secondary-gold': '#958457',
                'background-gold': '#F5D88F',
                'contact-text-color': '#ECECED',
            },
            borderRadius: {
                default: '3px',
            },
            borderWidth: {
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                6: '6px',
                8: '8px',
            },
            keyframes: {
                account: {
                    '0%': { opacity: 0.4 },
                    '50%': { opacity: 0.6 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                account: 'account 600ms ease-in-out',
            },
        },
        screens: {
            sm: '360px',
            md: '768px',
            lg: '900px',
            xl: '1024px',
            xxl: '1280px',
            '2xl': '1536px',
        },
    },
    important: true,
    plugins: [],
};
