import { IGif } from "@giphy/js-types"
import range from "lodash/range"
import { SearchResultsProps } from "../components"
import { config } from "../config"

export class ColumnManager {
  private cols: SearchResultsProps["columns"]
  private colHeights: number[]

  constructor(initialGifs?: IGif[]) {
    this.setResults(initialGifs || [])
  }

  setResults(gifs: IGif[]) {
    this.cols = range(config.colums).map(() => ({ gifs: [] }))
    this.colHeights = range(config.colums).map(() => 0)
    this.addResults(gifs)
  }

  addResults(gifs: IGif[]) {
    gifs.forEach((gif) => this.addResult(gif))
  }

  private addResult(gif: IGif) {
    const columnIndex = this.shortestColumnIndex
    const { width, height, url } = gif.images.fixed_width

    const ourGif = {
      width: config.columnWidth,
      height: height * (config.columnWidth / width),
      url,
    }

    this.cols[columnIndex].gifs.push(ourGif)
    this.colHeights[columnIndex] += ourGif.height + config.gridGap
  }

  get columns() {
    return this.cols
  }

  private get shortestColumnIndex() {
    return this.colHeights.indexOf(Math.min(...this.colHeights))
  }
}
