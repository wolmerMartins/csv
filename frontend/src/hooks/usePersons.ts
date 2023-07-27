import { useContext } from 'react'

import { UsePersons } from './reducers/usePersonsReducer'
import { PersonsContext } from './context'

export default function usePersons(): UsePersons {
  const context = useContext(PersonsContext)

  return <UsePersons>context
}
