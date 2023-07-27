import { ChangeEvent } from 'react'

import './style.css'

type InputTextProps = {
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputText({ name, onChange }: InputTextProps) {
  return (
    <input
      className="input-text"
      type="text"
      name={name}
      onChange={onChange}
    />
  )
}
