import { FC } from "react"

import { CopyButton } from "./CopyButton"
import styles from "./SearchResults.module.scss"

export interface Gif {
  width: number
  height: number
  url: string
  alt: string
}

export interface SearchResultsProps {
  columns: {
    gifs: Gif[]
  }[]
}

export const SearchResults: FC<SearchResultsProps> = ({ columns }) => {
  return (
    <div className={styles.columns}>
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
              <img className={styles.img} src={gif.url} alt={gif.alt} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
