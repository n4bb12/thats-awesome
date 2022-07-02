import { NextPage } from "next"

import { Background, Search } from "src/components"
import { isBrowser } from "src/utils/ssr"

const Home: NextPage = () => {
  if (isBrowser() && "scrollRestoration" in window.history) {
    // Back off, browser, I got this...
    window.history.scrollRestoration = "manual"
  }

  return (
    <>
      <Background />
      <Search />
    </>
  )
}

export default Home
