/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
    },
    productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
