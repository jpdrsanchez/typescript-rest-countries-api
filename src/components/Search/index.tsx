import { ChangeEvent, useMemo, useState } from 'react'

import { debounce } from 'utils'
import Icon from './Icon'
import * as S from './styles'

type SearchProps = {
  initialValue?: string
  placeholder: string
  label: string
  onSearch: (value: string) => void
}

const Search = (props: SearchProps) => {
  const { initialValue = '', placeholder, label, onSearch } = props

  const [value, setValue] = useState(initialValue)

  const debouncedSearch = useMemo(() => debounce(onSearch, 500), [onSearch])

  const handleChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value)
    debouncedSearch(value)
  }

  return (
    <S.Form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        aria-label={label}
        value={value}
        onChange={handleChange}
      />
      <Icon title="Loupe Icon" />
      <button type="submit">Send</button>
    </S.Form>
  )
}

export default Search
