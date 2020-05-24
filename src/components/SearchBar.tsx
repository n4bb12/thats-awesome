import { FC } from "react"

export type SearchBarProps = {
  input: string
  onInputChange: (input: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ input, onInputChange }) => {
  return (
    <input
      type="search"
      value={input}
      onChange={e => onInputChange(e.target.value)}
    />
  )
}
