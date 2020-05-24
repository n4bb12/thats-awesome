import { GifsResult } from "@giphy/js-fetch-api"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { useState, useCallback, useEffect } from "react"

import { Background, SearchBar, SearchResults } from "../components"
import { config } from "../config"
import { giphyApiClient } from "../giphy"
import styles from "./index.module.scss"

const gf = giphyApiClient()

type HomeProps = {
  initialInput: string
  initialSearchResults: GifsResult
}

const Home: NextPage<HomeProps> = ({ initialInput, initialSearchResults }) => {
  const [input, setInput] = useState(initialInput)
  const [searchResults, setSearchResults] = useState<GifsResult>(
    initialSearchResults,
  )

  const search = useCallback(async (input: string) => {
    window.history.pushState(null, null, window.location.origin + "?q=" + input)
    const result = await gf.search(input, {
      offset: 0,
      limit: 25,
      type: "gifs",
      rating: "g",
    })
    setSearchResults(result)
  }, [])

  let searchTimeout: any
  const searchDebounced = useCallback(
    (input: string) => {
      clearTimeout(searchTimeout)
      searchTimeout = setTimeout(
        () => search(input),
        config.searchDebounceTimeMs,
      )
    },
    [search, searchTimeout],
  )

  useEffect(() => searchDebounced(input), [input])

  return (
    <>
      <Background />
      <div className="container">
        <Head>
          <title>{config.title}</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className={styles.container}>
          <h1>{config.title}</h1>

          <SearchBar input={input} onInputChange={setInput} />
          <SearchResults gifs={searchResults} />
        </div>
      </div>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async context => {
  const initialInput = (context.query.q as string) || config.defaultSearch

  const initialSearchResults = await gf.search(initialInput, {
    offset: 0,
    limit: 25,
    type: "gifs",
    rating: "g",
  })

  return {
    props: {
      initialInput,
      initialSearchResults,
    },
  }
}
