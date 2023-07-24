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
                'dashboard-gold': '#F8E4B2',
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
            boxShadow: {
                default:
                    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
                premium:
                    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                subtle: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;',
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
