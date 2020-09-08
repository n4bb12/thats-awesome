import "modern-normalize"

import { AppProps } from "next/app"
import Head from "next/head"

import "./_app.scss"
import { config } from "../config"
import { useRouter } from "next/dist/client/router"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathname = router.pathname === "/" ? "" : router.pathname
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <base href="/" />
        <title>{config.title}</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=XByJjWgwde" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=XByJjWgwde" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=XByJjWgwde" />
        <link rel="manifest" href="/app.webmanifest?v=XByJjWgwde" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=XByJjWgwde" color="#02b7ff" />
        <link rel="shortcut icon" href="/favicon.ico?v=XByJjWgwde" />
        <link rel="canonical" href={"https://thats-awesome.vercel.app" + pathname} />

        <meta name="theme-color" content="#02b7ff" />
        <meta name="application-name" content="That's awesome!" />
        <meta name="description" content="The best way to say something is awesome!" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="That's awesome!" />
        <meta property="og:description" content="The best way to say something is awesome!" />
        <meta property="og:site_name" content="That's awesome!" />
        <meta property="og:url" content="https://thats-awesome.vercel.app" />
        <meta property="og:image" content="https://thats-awesome.vercel.app/android-chrome-192x192.png?v=XByJjWgwde" />

        <meta name="msapplication-TileColor" content="#02b7ff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="That's awesome!" />

        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
