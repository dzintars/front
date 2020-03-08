import { UiTypes, UiActionTypes } from './types'

export const toggleLauncher = (): UiActionTypes => ({
  type: UiTypes.LAUNCHER_TOGGLE,
  meta: { websocket: true },
})

export const displayLauncher = (): UiActionTypes => ({
  type: UiTypes.LAUNCHER_SHOW,
  meta: { websocket: true },
})

export const hideLauncher = (): UiActionTypes => ({
  type: UiTypes.LAUNCHER_HIDE,
  meta: { websocket: true },
})

export const launcherDisplayed = (): UiActionTypes => ({
  type: UiTypes.LAUNCHER_DISPLAYED,
  meta: { websocket: false },
})

export const launcherHidden = (): UiActionTypes => ({
  type: UiTypes.LAUNCHER_HIDDEN,
  meta: { websocket: false },
})

export const toggleAccountWidget = (): UiActionTypes => ({
  type: UiTypes.ACCOUNT_WIDGET_TOGGLE,
})

export const displayAccountWidget = (): UiActionTypes => ({
  type: UiTypes.ACCOUNT_WIDGET_DISPLAY,
})
export const loadApplication = (): UiActionTypes => ({
  type: UiTypes.APPLICATION_LOAD,
})
export const loadingApplication = (): UiActionTypes => ({
  type: UiTypes.APPLICATION_LOADING,
})
export const loadedApplication = (): UiActionTypes => ({
  type: UiTypes.APPLICATION_LOADED,
})
export const closeApplication = (): UiActionTypes => ({
  type: UiTypes.APPLICATION_CLOSE,
})
export const closedApplication = (): UiActionTypes => ({
  type: UiTypes.APPLICATION_CLOSED,
})
