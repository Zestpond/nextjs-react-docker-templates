/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  // Allow HMR WebSocket when dev server is embedded in an iframe (vibe coding platform)
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS
    ? process.env.ALLOWED_DEV_ORIGINS.split(',')
    : ['*'],
};
export default nextConfig;
