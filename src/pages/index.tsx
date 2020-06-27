import { NextPage } from "next"
import Head from "next/head"

import { Background, Search } from "../components"
import { config } from "../config"

const Home: NextPage = () => {
  if (process.browser && "scrollRestoration" in window.history) {
    // Back off, browser, I got this...
    window.history.scrollRestoration = "manual"
  }

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
        />
      </Head>

      <Background />
      <Search />
    </>
  )
}

export default Home
