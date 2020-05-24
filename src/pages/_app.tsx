import "modern-normalize"

import { AppProps } from "next/app"

import "./_app.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
