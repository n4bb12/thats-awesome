import debounce from "lodash/debounce"
import { NextPage } from "next"
import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import { SearchBar, SearchResults } from "../components"
import { config } from "../config"
import { giphyApiClient } from "../giphy"
import { ColumnManager, updateUrl } from "../utils"
import { randomWord } from "../words"
import styles from "./Search.module.scss"

const gf = giphyApiClient()

function getQuery() {
  return process.browser && window.location.search.substr("?q=".length)?.trim()
}

export const Search: NextPage = () => {
  const initialInput = getQuery() || randomWord()

  const [input, setInput] = useState(initialInput)
  const [page, setPage] = useState(0)
  const [ref, inView] = useInView()
  const [busy, setBusy] = useState(false)
  const [columnManager] = useState(new ColumnManager())

  const search = useCallback(
    async (userInput: string, scrolledPage: number) => {
      setBusy(true)

      const searchTerm = userInput?.trim() || randomWord()
      const page = userInput.trim()
        ? scrolledPage
        : Math.floor(Math.random() * 5)

      const result = await gf.search(searchTerm, {
        offset: page * config.chunkSize,
        limit: config.chunkSize,
        type: "gifs",
        rating: "g",
      })

      if (scrolledPage) {
        columnManager.addResults(result.data)
      } else {
        columnManager.setResults(result.data)
      }
      setPage(scrolledPage)
      setTimeout(() => setBusy(false))
    },
    [],
  )

  const searchDebounced = useCallback<typeof search>(
    debounce(search, config.searchDebounceTimeMs),
    [search],
  )

  useEffect(() => {
    search(input, 0)
  }, [])

  useEffect(() => {
    if (inView && !busy) {
      search(input, page + 1)
    }
  }, [inView])

  return (
    <div className={styles.container}>
      <h1>{config.title}</h1>

      <SearchBar
        input={input}
        onInputChange={(newInput) => {
          setInput(newInput)
          updateUrl(newInput)
          searchDebounced(newInput, 0)
        }}
      />
      <SearchResults columns={columnManager.columns} />

      <div className={styles.loadingTrigger} ref={ref}></div>
    </div>
  )
}
