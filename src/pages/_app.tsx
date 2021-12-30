import "modern-normalize"

import { AppProps } from "next/app"

import { MetaTags } from "src/components"
import { config } from "src/config"

import "./_app.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={
        {
          ["--column-count"]: config.colums,
          ["--grid-gap"]: config.gridGap + "px",
          ["--section-gap"]: config.sectionGap + "px",
        } as any
      }
    >
      <MetaTags />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
