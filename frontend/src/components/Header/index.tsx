import personsLogo from '../../assets/icons/person-circle-outline.svg'

import './style.css'

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <img className="header-logo" src={personsLogo} alt="Persons logo" />
      <h1 className="header-title">Persons</h1>
    </header>
  )
}
