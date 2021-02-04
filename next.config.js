const composePlugins = require("next-compose-plugins")
const pwa = require("next-pwa")

const pwaConfig = {
  pwa: {
    disable:
      process.env.NODE_ENV === "development" && !process.argv.includes("--pwa"),
    dest: "public",
  },
}

// All config properties, including experimental flags:
// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  experimental: {
    productionBrowserSourceMaps: true,
  },
  reactStrictMode: true,
}

module.exports = composePlugins([[pwa, pwaConfig]], nextConfig)
