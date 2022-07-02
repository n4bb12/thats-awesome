import { GifsResult } from "@giphy/js-fetch-api"
import { FC } from "react"

export type GifVariantsProps = {
  gifs: GifsResult
}

export const GifVariants: FC<GifVariantsProps> = ({ gifs }) => {
  const images = Object.entries(gifs?.data[0]?.images || {}).filter(
    ([key]) =>
      !key.endsWith("_still") && !key.endsWith("_downsampled") && !key.endsWith("_mp4") && !key.startsWith("preview_"),
  )

  return (
    <div>
      <h2>Variants</h2>
      {images.map(([key, img]) => (
        <div key={img.url}>
          <div>
            <img src={img.url} width={img.width} height={img.height} />
          </div>
          <div>
            <code>
              {key} ({img.size} Bytes)
            </code>
            <pre>{JSON.stringify(img, null, 2)}</pre>
          </div>
        </div>
      ))}
    </div>
  )
}
