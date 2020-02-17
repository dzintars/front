import { ApplicationTypes, ApplicationActionTypes } from './types'
import { ApplicationsState } from './models'

export { ApplicationsState }

const initialState: ApplicationsState = {
  entities: {},
  ids: [],
  fetching: false,
  selected: '',
  error: null,
}

export default (state: ApplicationsState = initialState, action: ApplicationActionTypes): ApplicationsState => {
  switch (action.type) {
    case ApplicationTypes.SELECT:
      return { ...state, selected: action.uuid }

    case ApplicationTypes.LIST_FETCH_REQUEST:
      return { ...state, fetching: true, error: null }

    case ApplicationTypes.LIST_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        entities: {
          ...state.entities,
          ...action.applications.reduce((map, application) => {
            map[application.uuid] = application
            return map
          }, {}),
        },
        ids: action.applications.map(app => app.uuid),
      }

    case ApplicationTypes.LIST_FETCH_FAILURE:
      return { ...state, fetching: false, error: action.error }

    case ApplicationTypes.FETCH_REQUEST:
      return { ...state, fetching: true, error: null }

    case ApplicationTypes.FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        entities: {
          ...state.entities,
          [action.application.uuid]: action.application,
        },
      }

    case ApplicationTypes.FETCH_FAILURE:
      return { ...state, fetching: false, error: action.error }

    default:
      return state
  }
}
