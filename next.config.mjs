/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MY_EMAIL_PASSWORD: process.env.MY_EMAIL_PASSWORD,
    MY_EMAIL: process.env.MY_EMAIL,
  },
};

export default nextConfig;
