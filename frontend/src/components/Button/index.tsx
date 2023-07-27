import { MouseEvent } from 'react'

import './style.css'

type ButtonProps = {
  children: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  theme?: 'success' | 'danger'
}

export default function Button({ children, onClick, disabled = false, theme = 'success' }: ButtonProps) {
  function getClasses() {
    return `button button-${theme}-theme`
  }

  return (
    <button className={getClasses()} disabled={disabled} onClick={onClick}>
      { children }
    </button>
  )
}
