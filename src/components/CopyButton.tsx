import copyToClipboard from "copy-to-clipboard"
import { FC, useCallback, useEffect, useState } from "react"

import { config } from "src/config"

import styles from "./CopyButton.module.scss"

const copyEvent = "app-copy"

function emitCopy(url: string) {
  const event = new CustomEvent(copyEvent, { detail: url })
  window.dispatchEvent(event)
}

function useCopy(url: string) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onCopy = (e: CustomEvent) => {
      setCopied(e.detail === url)
    }

    const setup = () => window.addEventListener(copyEvent, onCopy)
    const cleanup = () => window.removeEventListener(copyEvent, onCopy)

    setup()
    return cleanup
  })

  return [copied]
}

export type CopyButtonProps = {
  url: string
}

export const CopyButton: FC<CopyButtonProps> = ({ url }) => {
  const [copied] = useCopy(url)

  const buttonClassName = [
    styles.copyButton,
    copied ? styles.copyButton__copied : null,
  ]
    .filter(Boolean)
    .join(" ")

  const onClick = useCallback(() => {
    copyToClipboard(`<img src="${url}" width="${config.columnWidth}"/>`)
    emitCopy(url)
  }, [url])

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>
      <div className={styles.copyLabel}>Copy</div>
      <div className={styles.copyFeedback}>Copied ✔</div>
    </button>
  )
}
