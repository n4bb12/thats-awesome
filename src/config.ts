export const config = {
  title: "That's awesome!",
  colums: 3,
  columnWidth: 300,
  gridGap: 16,
  chunkSize: 25,
  searchDebounceTimeMs: 100,
  giphyApiKey: process.env.NEXT_PUBLIC_GIPHY_API_KEY,
} as const
