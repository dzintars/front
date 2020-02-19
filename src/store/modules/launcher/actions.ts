import { LauncherTypes, LauncherActionTypes } from './types'

export const toggleLauncher = (): LauncherActionTypes => ({
  type: LauncherTypes.TOGGLE,
  meta: { websocket: false },
})

export const showLauncher = (): LauncherActionTypes => ({
  type: LauncherTypes.SHOW,
})

export const hideLauncher = (): LauncherActionTypes => ({
  type: LauncherTypes.HIDE,
})

export const launcherShown = (): LauncherActionTypes => ({
  type: LauncherTypes.SHOWN,
})

export const launcherHidden = (): LauncherActionTypes => ({
  type: LauncherTypes.HIDDEN,
})
