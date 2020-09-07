import { FC } from "react"
import { Background as ImgixBackground } from "react-imgix"

import styles from "./Background.module.scss"

export const Background: FC = ({ children }) => {
  return (
    <ImgixBackground
      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
      className={styles.img}
      imgixParams={{ auto: "format,compress" }}>
      {children}
    </ImgixBackground>
  )
}
