import { IGif } from "@giphy/js-types"
import { Grid } from "@giphy/react-components"
import { FC, SyntheticEvent, useCallback } from "react"

import { gf } from "../constants"

export type SearchResultsProps = {
  input: string
  onGifClick?: (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => void
}

export const SearchResults: FC<SearchResultsProps> = ({
  input,
  onGifClick,
}) => {
  const fetchGifs = useCallback(
    (offset: number) => gf.search(input, { offset, limit: 10 }),
    [input],
  )
  return (
    <Grid
      onGifClick={onGifClick}
      fetchGifs={fetchGifs}
      width={800}
      columns={3}
      gutter={6}
    />
  )
}
