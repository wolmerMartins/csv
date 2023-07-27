export type Person = {
  name: string
  city: string
  country: string
  favoriteSport: string
}

export type ApiError = {
  code: string
  message: string
}

export type PersonsState = {
  isLoading: boolean
  data: Person[]
  error?: ApiError
}

type BaseAction = {
  type: string
}

type LoadPersonsSucceed = {
  data: Person[]
} & BaseAction

type LoadPersonsFailed = {
  error: ApiError
} & BaseAction

type PersonsActions = BaseAction | LoadPersonsSucceed | LoadPersonsFailed

export const initialState: PersonsState = {
  isLoading: false,
  data: [],
  error: undefined
}

const LOAD_PERSONS_STARTED = 'LOAD_PERSONS_STARTED'
const LOAD_PERSONS_SUCCEED = 'LOAD_PERSONS_SUCCEED'
const LOAD_PERSONS_FAILED = 'LOAD_PERSONS_FAILED'

export function loadPersonsStarted() {
  return {
    type: LOAD_PERSONS_STARTED
  }
}

export function loadPersonsSucceed(data: Person[]) {
  return {
    type: LOAD_PERSONS_SUCCEED,
    data
  }
}

export function loadPersonsFailed(error: ApiError) {
  return {
    type: LOAD_PERSONS_FAILED,
    error
  }
}

export default function personsReducer(state: PersonsState, action: PersonsActions): PersonsState {
  switch(action.type) {
    case LOAD_PERSONS_STARTED:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_PERSONS_SUCCEED:
      return {
        ...state,
        isLoading: false,
        data: (action as LoadPersonsSucceed).data,
        error: undefined
      }
    case LOAD_PERSONS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: (action as LoadPersonsFailed).error
      }
    default:
      return initialState
  }
}
