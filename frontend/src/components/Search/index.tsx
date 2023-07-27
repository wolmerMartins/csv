import { ChangeEvent, useState } from 'react'

import Button from '../Button'
import InputText from '../InputText'

import './style.css'

type SearchProps = {
  onSearch: (query?: string) => void
}

export default function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState<string>()

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setQuery(e.target.value)
  }

  function handleSearch(): void {
    onSearch(query)
  }

  return (
    <div className="search">
      <InputText name="search" onChange={handleChange} />

      <Button onClick={handleSearch}>Search</Button>
    </div>
  )
}
