import { GifsResult } from "@giphy/js-fetch-api"
import { FC } from "react"

import styles from "./SearchResults.module.scss"

const columns = [0, 1, 2, 3]

export type SearchResultsProps = {
  gifs: GifsResult
}

export const SearchResults: FC<SearchResultsProps> = ({ gifs }) => {
  const images = gifs?.data?.map(result => result.images.fixed_width) || []

  return (
    <div>
      <div className={styles.columns}>
        {columns.map(column => (
          <div key={column}>
            {images
              .filter((img, i) => i % columns.length === column)
              .map(img => (
                <img
                  key={img.url}
                  className={styles.img}
                  src={img.url}
                  width={img.width}
                  height={img.height}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}
