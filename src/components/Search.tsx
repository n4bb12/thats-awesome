import { IGif } from "@giphy/js-types"
import debounce from "lodash/debounce"
import { NextPage } from "next"
import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import { SearchBar, SearchResults } from "../components"
import { config } from "../config"
import { giphyApiClient } from "../giphy"
import { randomWord } from "../words"
import styles from "./Search.module.scss"

const gf = giphyApiClient()

export type SearchProps = {
  initialInput: string
  initialGifs: IGif[]
}

export const Search: NextPage<SearchProps> = ({
  initialInput,
  initialGifs,
}) => {
  const [input, setInput] = useState(initialInput)
  const [page, setPage] = useState(0)
  const [ref, inView] = useInView()
  const [busy, setBusy] = useState(false)
  const [gifs, setGifs] = useState(initialGifs)

  const search = useCallback(
    async (userInput: string, searchOffset: number) => {
      setBusy(true)

      const searchTerm = userInput?.trim() || randomWord()
      const result = await gf.search(searchTerm, {
        offset: searchOffset * config.chunkSize,
        limit: config.chunkSize,
        type: "gifs",
        rating: "g",
      })

      setPage(searchOffset)
      setGifs(searchOffset ? [...gifs, ...result.data] : result.data)
      setTimeout(() => setBusy(false))
    },
    [gifs],
  )

  const searchDebounced = useCallback<typeof search>(
    debounce(search, config.searchDebounceTimeMs),
    [search],
  )

  useEffect(() => {
    if (input !== initialInput) {
      window.history.replaceState(
        null,
        null,
        window.location.origin + "?q=" + input,
      )

      searchDebounced(input, 0)
    }
  }, [input])

  useEffect(() => {
    if (inView && !busy) {
      search(input, page + 1)
    }
  }, [inView])

  return (
    <div className={styles.container}>
      <h1>{config.title}</h1>

      <SearchBar input={input} onInputChange={setInput} />
      <SearchResults gifs={gifs} />

      <div className={styles.loadingTrigger} ref={ref}></div>
    </div>
  )
}
