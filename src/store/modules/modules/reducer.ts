import { ModuleTypes, ModuleActionTypes } from './types'
import { ModulesState } from './models'

export { ModulesState }

const initialState: ModulesState = {
  entities: {},
  ids: [],
}

export default (state: ModulesState = initialState, action: ModuleActionTypes): ModulesState => {
  switch (action.type) {
    case ModuleTypes.GET_SUCCESS:
      return {
        ...state,
        entities: {
          ...action.payload.entities,
        },
        ids: action.payload.ids,
      }

    default:
      return state
  }
}
