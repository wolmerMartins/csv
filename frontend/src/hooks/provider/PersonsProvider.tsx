import { PersonsContext } from '../context'
import usePersonsReducer from '../reducers/usePersonsReducer'

type PersonsProviderProps = {
  children: JSX.Element
}

export default function PersonsProvider({ children }: PersonsProviderProps): JSX.Element {
  const usePersonsHook = usePersonsReducer()

  return (
    <PersonsContext.Provider value={usePersonsHook}>
      {children}
    </PersonsContext.Provider>
  )
}
