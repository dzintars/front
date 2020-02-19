import { UiTypes, UiActionTypes } from './types'
import { UiState } from './models'

export { UiState }

const initialState: UiState = {
  isLauncherDisplayed: false,
}

export default (state: UiState = initialState, action: UiActionTypes): UiState => {
  switch (action.type) {
    case UiTypes.LAUNCHER_TOGGLE:
      return { ...state, isLauncherDisplayed: !state.isLauncherDisplayed }
    case UiTypes.LAUNCHER_SHOW:
      return { ...state, isLauncherDisplayed: true }

    case UiTypes.LAUNCHER_HIDE:
      return { ...state, isLauncherDisplayed: false }

    case UiTypes.LAUNCHER_DISPLAYED:
      return { ...state, isLauncherDisplayed: true }

    case UiTypes.LAUNCHER_HIDDEN:
      return { ...state, isLauncherDisplayed: false }

    default:
      return state
  }
}
