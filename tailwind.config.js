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
                'pry-text-color-1': '#807C89',
                'pry-text-color-2': '#585264',
                'pry-header-title': '#140C24',
                'btn-color': '#786995',
                'secondary-gold': '#958457',
                'contact-text-color': '#ECECED',
            },
        },
        screens: {
            sm: '360px',
            md: '768px',
            lg: '960px',
            xl: '1024px',
            xxl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
};
