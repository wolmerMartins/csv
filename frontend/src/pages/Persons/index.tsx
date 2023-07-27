import { Fragment } from 'react'

import Card from '../../components/Card'
import { Person } from '../../hooks/reducers/persons'
import usePersons from '../../hooks/usePersons'
import Search from '../../components/Search'

import './style.css'

export default function Persons(): JSX.Element {
  const { state, findPersons } = usePersons()

  return (
    <div className="persons">
      <div className="persons-search-container">
        <div className="persons-search">
          <Search onSearch={findPersons} />
        </div>
      </div>

      <div className="persons-list">
        {state.data?.map(
          (person: Person, index: number) => (
            <Fragment key={`${person.name}-${index}`}>
              <Card user={person} />
            </Fragment>
          )
        )}
      </div>
    </div>
  )
}
