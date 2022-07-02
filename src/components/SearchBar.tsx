import { FC } from "react"

import styles from "./SearchBar.module.scss"

export type SearchBarProps = {
  input: string
  onInputChange: (input: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ input, onInputChange }) => {
  return (
    <div className={styles.wrapper}>
      <input
        aria-label="Search"
        className={styles.input}
        type="search"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        spellCheck={false}
        autoCapitalize="false"
        autoComplete="false"
        autoCorrect="false"
        autoFocus
        onBlur={(e) => {
          const scrollTop = document.documentElement.scrollTop
          e.target.focus()
          document.documentElement.scrollTop = scrollTop
        }}
        onFocus={(e) => {
          const length = e.target.value.length
          e.target.setSelectionRange(length, length)
        }}
      />

      {input && <button className={styles.clear} onClick={(e) => onInputChange("")} aria-label="Clear" />}
    </div>
  )
}
