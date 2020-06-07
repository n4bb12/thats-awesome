import { FC } from "react"
import ImgixBackground from "react-imgix"
import styles from "./Background.module.scss"

export const Background: FC = ({ children }) => {
  return (
    <ImgixBackground
      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
      sizes="100vw"
      className={styles.img}
      imgixParams={{
        auto: "format,compress",
      }}>
      {children}
    </ImgixBackground>
  )
}
