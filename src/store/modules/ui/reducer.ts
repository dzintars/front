import { UiTypes, UiActionTypes } from './types'
import { UiState } from './models'

export { UiState }

const initialState: UiState = {
  isLauncherDisplayed: false,
  isAccountWidgetDisplayed: false,
  application: {
    state: false,
  },
}

export default (state: UiState = initialState, action: UiActionTypes): UiState => {
  switch (action.type) {
    case UiTypes.LAUNCHER_TOGGLE:
      return { ...state, isLauncherDisplayed: !state.isLauncherDisplayed }

    case UiTypes.LAUNCHER_DISPLAY:
      return { ...state, isLauncherDisplayed: true }

    case UiTypes.LAUNCHER_DISPLAYED:
      return { ...state, isLauncherDisplayed: true }

    case UiTypes.LAUNCHER_HIDE:
      return { ...state, isLauncherDisplayed: false }

    case UiTypes.LAUNCHER_HIDDEN:
      return { ...state, isLauncherDisplayed: false }

    case UiTypes.ACCOUNT_WIDGET_TOGGLE:
      return { ...state, isAccountWidgetDisplayed: !state.isAccountWidgetDisplayed }

    case UiTypes.ACCOUNT_WIDGET_DISPLAY:
      return { ...state, isAccountWidgetDisplayed: true }

    default:
      return state
  }
}
