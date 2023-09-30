/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // if you don't need to debug service worker in dev, you can set disable:
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  swcMinify: true,
});
