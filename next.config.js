/** @type {import('next').NextConfig} */
const nextConfig = {
  
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin')('./src/config/i18n/i18n.ts');

module.exports = withNextIntl(nextConfig);
