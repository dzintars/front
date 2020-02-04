import { ApplicationActions, ApplicationTypes } from './actions'
import { Application } from './model'

export interface ApplicationState {
  entities: { [uuid: string]: Application }
  ids: string[]
  fetching: boolean
  selected: string
  error: Error
}

const initialState: ApplicationState = {
  entities: {},
  ids: [],
  fetching: false,
  selected: '',
  error: null,
}

export default (
  state: ApplicationState = initialState,
  action: ApplicationActions
): ApplicationState => {
  switch (action.type) {
    case ApplicationTypes.APPLICATION_SELECT:
      return { ...state, selected: action.payload.uuid }

    case ApplicationTypes.APPLICATION_LIST_FETCH_REQUEST:
      return { ...state, fetching: true, error: null }

    case ApplicationTypes.APPLICATION_LIST_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        entities: {
          ...state.entities,
          ...action.payload.applications.reduce((map, application) => {
            map[application.uuid] = application
            return map
          }, {}),
        },
        ids: action.payload.applications.map(app => app.uuid),
      }

    case ApplicationTypes.APPLICATION_LIST_FETCH_FAILURE:
      return { ...state, fetching: false, error: action.payload.error }

    case ApplicationTypes.APPLICATION_FETCH_REQUEST:
      return { ...state, fetching: true, error: null }

    case ApplicationTypes.APPLICATION_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        entities: {
          ...state.entities,
          [action.payload.application.uuid]: action.payload.application,
        },
      }

    case ApplicationTypes.APPLICATION_FETCH_FAILURE:
      return { ...state, fetching: false, error: action.payload.error }

    default:
      return state
  }
}
