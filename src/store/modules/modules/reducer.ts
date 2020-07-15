import { ModuleTypes, ModuleActionTypes } from './types'
import { ModulesState } from './models'

export { ModulesState }

const initialState: ModulesState = {
  byId: {},
  allIds: [],
  highlightedModule: '',
}

export default (state: ModulesState = initialState, action: ModuleActionTypes): ModulesState => {
  switch (action.type) {
    case ModuleTypes.GET_SUCCESS:
      return {
        ...state,
        byId: {
          ...action.payload.byId,
        },
        allIds: action.payload.allIds,
      }

    default:
      return state
  }
}
