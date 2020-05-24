import { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"

import "./index.module.scss"
import { SearchBar, SearchResults } from "../components"

const Home: NextPage = () => {
  const [input, setInput] = useState("")

  return (
    <div className="container">
      <Head>
        <title>That's awesome!</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>That's awesome!</h1>

      <SearchBar input={input} onInputChange={setInput} />
      <SearchResults input={input} />
    </div>
  )
}

export default Home
