import { GifsResult } from "@giphy/js-fetch-api"
import { FC, useState } from "react"

import { CopyButton } from "./CopyButton"
import styles from "./SearchResults.module.scss"

const columns = [0, 1, 2, 3, 4, 5]

export type SearchResultsProps = {
  gifs: GifsResult
}

export const SearchResults: FC<SearchResultsProps> = ({ gifs }) => {
  const [numCols, setNumCols] = useState(3)
  const images = gifs?.data?.map(result => result.images.fixed_width) || []

  return (
    <div>
      {/* <input
        type="range"
        min="1"
        max="6"
        value={numCols}
        onChange={e => setNumCols(+e.target.value)}
      /> */}
      <div
        className={styles.columns}
        style={{ ["--column-count"]: numCols } as any}
      >
        {columns.slice(0, numCols).map(column => (
          <div key={column}>
            {images
              .filter((img, i) => i % numCols === column)
              .map(img => (
                <div className={styles.imgContainer} key={img.url}>
                  <CopyButton url={img.url} />
                  <img
                    className={styles.img}
                    src={img.url}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}
