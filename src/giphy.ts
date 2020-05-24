import { GiphyFetch } from "@giphy/js-fetch-api"

import { config } from "./config"

let gf: GiphyFetch

export function giphyApiClient() {
  if (!gf) {
    gf = new GiphyFetch(config.giphyApiKey)
  }
  return gf
}
