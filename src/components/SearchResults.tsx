import { FC } from "react"

import { config } from "../config"
import { CopyButton } from "./CopyButton"
import styles from "./SearchResults.module.scss"

export type SearchResultsProps = {
  columns: {
    gifs: {
      width: number
      height: number
      url: string
    }[]
  }[]
}

export const SearchResults: FC<SearchResultsProps> = ({ columns }) => {
  return (
    <div
      className={styles.columns}
      style={
        {
          ["--column-count"]: config.colums,
          ["--grid-gap"]: config.gridGap + "px",
        } as any
      }>
      {columns.map((column, c) => (
        <div key={c}>
          {column.gifs.map((gif) => (
            <div
              key={gif.url}
              className={styles.imgContainer}
              style={{
                width: gif.width + "px",
                height: gif.height + "px",
              }}>
              <CopyButton url={gif.url} />
              <img className={styles.img} src={gif.url} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
