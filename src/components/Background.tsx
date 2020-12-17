import { FC } from "react"
import { Background as ImgixBackground } from "react-imgix"

import styles from "./Background.module.scss"

export const Background: FC = ({ children }) => {
  return (
    <ImgixBackground
      src="https://images.unsplash.com/photo-1481137344492-d5a150a97f8b"
      className={styles.img}
      imgixParams={{ auto: "format,compress", q: 50 }}>
      {children}
    </ImgixBackground>
  )
}
