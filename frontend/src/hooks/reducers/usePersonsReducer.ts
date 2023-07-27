import { useReducer } from 'react'

import personsReducer, { ApiError, Person, PersonsState, initialState, loadPersonsFailed, loadPersonsStarted, loadPersonsSucceed } from './persons'

export type UsePersons = {
  state: PersonsState
  loadPersons: (file: File) => Promise<void>
  findPersons: (query?: string) => Promise<void>
}

type GetURL = {
  path: string
  query?: string
}

type GetRequestConfig = {
  body?: FormData
  method?: string
}

type MakeRequest = GetURL & GetRequestConfig

function getURL({ path, query }: GetURL): string {
  return `http://localhost:4000/api${path}${query ? `?q=${query}` : ''}`
}

function getRequestConfig({ body, method }: GetRequestConfig): RequestInit {
  const requestConfig = { method }
  if (!body) return requestConfig

  return {
    ...requestConfig,
    body
  }
}

async function makeRequest({
  path,
  body,
  query,
  method = 'GET'
}: MakeRequest): Promise<Person[]> {
  const response = await fetch(
    getURL({ path, query }),
    getRequestConfig({ body, method })
  )

  const result = await response.json()

  if (!response.ok) throw result

  return result
}

export default function usePersonsReducer(): UsePersons {
  const [state, dispatch] = useReducer(personsReducer, initialState)

  async function loadPersons(file: File): Promise<void> {
    dispatch(loadPersonsStarted())

    const formData = new FormData()
    formData.append('file', file)

    try {
      const persons = await makeRequest({
        path: '/files',
        body: formData,
        method: 'POST'
      })

      dispatch(loadPersonsSucceed(persons))
    } catch(error) {
      dispatch(loadPersonsFailed(<ApiError>error))
    }
  }

  async function findPersons(query?: string): Promise<void> {
    dispatch(loadPersonsStarted())

    try {
      const persons = await makeRequest({ path: '/users', query })

      dispatch(loadPersonsSucceed(persons))
    } catch(error) {
      dispatch(loadPersonsFailed(<ApiError>error))
    }
  }

  return { state, loadPersons, findPersons }
}
