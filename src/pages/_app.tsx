import "modern-normalize"

import { AppProps } from "next/app"

import { MetaTags } from "src/components"

import "./_app.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaTags />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
