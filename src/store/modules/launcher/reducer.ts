import { LauncherTypes, LauncherActionTypes } from './types'

export interface LauncherState {
  isVisible: boolean
}

const initialState: LauncherState = {
  isVisible: false,
}

export default (state: LauncherState = initialState, action: LauncherActionTypes): LauncherState => {
  switch (action.type) {
    case LauncherTypes.TOGGLE:
      return { ...state, isVisible: !state.isVisible }
    case LauncherTypes.SHOW:
      return { ...state, isVisible: true }

    case LauncherTypes.SHOWN:
      return { ...state, isVisible: true }

    case LauncherTypes.HIDE:
      return { ...state, isVisible: false }

    case LauncherTypes.HIDDEN:
      return { ...state, isVisible: false }

    default:
      return state
  }
}
