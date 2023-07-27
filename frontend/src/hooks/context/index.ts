import { createContext } from 'react'

import { UsePersons } from '../reducers/usePersonsReducer'

export const PersonsContext = createContext<UsePersons | undefined>(undefined)
