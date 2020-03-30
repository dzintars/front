import { ApplicationTypes, ApplicationActionTypes } from './types'
import { ApplicationsState } from './models'

export { ApplicationsState }

const initialState: ApplicationsState = {
  entities: {
    '9a30119-d673-4978-b393-f608fe28ae07': {
      uuid: '9a30119-d673-4978-b393-f608fe28ae07',
      title: 'Home Root Fallback',
      component: 'app-home',
      permalink: '/',
    },
  },
  ids: [],
  fetching: false,
  selected: {
    uuid: '9a30119-d673-4978-b393-f608fe28ae07',
    state: 0,
  },
  error: null,
  defaultApplication: '9a30119-d673-4978-b393-f608fe28ae07',
}

export default (state: ApplicationsState = initialState, action: ApplicationActionTypes): ApplicationsState => {
  switch (action.type) {
    case ApplicationTypes.SELECT:
      return {
        ...state,
        selected: {
          ...state.selected,
          uuid: action.uuid,
          state: 0,
        },
      }

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

    case ApplicationTypes.START:
      return {
        ...state,
        selected: {
          ...state.selected,
          uuid: action.uuid,
        },
      }

    case ApplicationTypes.GET_SUCCESS:
      // console.log('APP_GET_OK', action.payload)
      return {
        ...state,
        fetching: false,
        entities: {
          // ...state.entities,
          ...action.payload.entities,
        },
        ids: action.payload.ids,
      }

    case ApplicationTypes.FETCH_FAILURE:
      return { ...state, fetching: false, error: action.error }

    default:
      return state
  }
}
