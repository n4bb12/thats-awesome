import { IGif } from "@giphy/js-types"
import { FC, useState } from "react"

import { CopyButton } from "./CopyButton"
import styles from "./SearchResults.module.scss"

const columns = [0, 1, 2, 3, 4, 5]

export type SearchResultsProps = {
  gifs: IGif[]
}

export const SearchResults: FC<SearchResultsProps> = ({ gifs }) => {
  const [numCols, setNumCols] = useState(3)

  const images = gifs.map((result) => result.images.fixed_width) || []

  return (
    <div>
      {/* configure the color */}
      {/* <input
        type="range"
        min="1"
        max="6"
        value={numCols}
        onChange={e => setNumCols(+e.target.value)}
      /> */}
      <div
        className={styles.columns}
        style={{ ["--column-count"]: numCols } as any}>
        {columns.slice(0, numCols).map((column) => (
          <div key={column}>
            {images
              .filter((img, i) => i % numCols === column)
              .map((gif) => (
                <div
                  className={styles.imgContainer}
                  key={gif.url}
                  style={{
                    width: "300px",
                    height: gif.height * (300 / gif.width) + "px",
                  }}>
                  <CopyButton url={gif.url} />
                  <img className={styles.img} src={gif.url} />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}
