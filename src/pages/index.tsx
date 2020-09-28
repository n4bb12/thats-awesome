import { NextPage } from "next"

import { Background, Search } from "src/components"

const Home: NextPage = () => {
  if (process.browser && "scrollRestoration" in window.history) {
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
