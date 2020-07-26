import { AppNavigationTypes, AppNavigationActionTypes } from './types'
import { AppNavigationState } from './models'

export { AppNavigationState }

const initialState: AppNavigationState = {
  entities: {},
  ids: [],
  fetching: false,
  selected: '',
  applicationId: '',
  error: null,
}

export default (state: AppNavigationState = initialState, action: AppNavigationActionTypes): AppNavigationState => {
  switch (action.type) {
    case AppNavigationTypes.SELECT_MODULE:
      return {
        ...state,
        selected: action.payload.id,
      }

    case AppNavigationTypes.LIST_FETCH_MODULES_REQUEST:
      return { ...state, fetching: true, error: null }

    case AppNavigationTypes.LIST_FETCH_MODULES_SUCCESS:
      return {
        ...state,
        fetching: false,
        entities: {
          ...action.payload.entities,
        },
        ids: action.payload.ids,
      }

    default:
      return state
  }
}
