import { GiphyFetch } from "@giphy/js-fetch-api"

export const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY)
