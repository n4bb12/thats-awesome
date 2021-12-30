/**
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
    localeDetection: false,
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
}

module.exports = nextConfig
