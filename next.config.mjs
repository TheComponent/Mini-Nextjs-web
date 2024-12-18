/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'cdn.imagin.studio',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
