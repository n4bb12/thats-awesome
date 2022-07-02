import { FC, useRef } from "react"
import { config } from "src/config"
import styles from "./CopyButton.module.scss"

function useCopiedUrl(url: string) {
  const copiedRef = useRef("")
  const copied = copiedRef.current === url

  function copy() {
    const text = `<img src="${url}" width="${config.columnWidth}"/>`
    navigator.clipboard.writeText(text)
    copiedRef.current = url
  }

  return [copy, copied] as const
}

export type CopyButtonProps = {
  url: string
}

export const CopyButton: FC<CopyButtonProps> = ({ url }) => {
  const [copy, copied] = useCopiedUrl(url)

  const buttonClassName = [styles.copyButton, copied ? styles.copyButton__copied : null].filter(Boolean).join(" ")

  return (
    <button type="button" className={buttonClassName} onClick={copy}>
      <div className={styles.copyLabel}>Copy</div>
      <div className={styles.copyFeedback}>Copied ✔</div>
    </button>
  )
}
