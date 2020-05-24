import { FC } from "react"

import styles from "./SearchBar.module.scss"

export type SearchBarProps = {
  input: string
  onInputChange: (input: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ input, onInputChange }) => {
  return (
    <input
      className={styles.input}
      type="search"
      value={input}
      onChange={e => onInputChange(e.target.value)}
    />
  )
}
