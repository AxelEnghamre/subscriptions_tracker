/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_SUPABASE_URL_CLEAN],
  },
};

module.exports = nextConfig;
