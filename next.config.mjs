/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return { beforeFiles: [{ source: '/', destination: '/home.html' }] };
  },
};
export default nextConfig;
