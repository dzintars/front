export enum LauncherTypes {
  TOGGLE = 'LAUNCHER_TOGGLE',
  SHOW = 'LAUNCHER_SHOW',
  HIDE = 'LAUNCHER_HIDE',
  SHOWN = 'LAUNCHER_SHOWN',
  HIDDEN = 'LAUNCHER_HIDDEN',
}

interface ToggleLauncherAction {
  readonly type: LauncherTypes.TOGGLE
}

interface ShowLauncherAction {
  readonly type: LauncherTypes.SHOW
}

interface HideLauncherAction {
  readonly type: LauncherTypes.HIDE
}

interface LauncherShownAction {
  readonly type: LauncherTypes.SHOWN
}

interface LauncherHiddenAction {
  readonly type: LauncherTypes.HIDDEN
}

export type LauncherActionTypes =
  | LauncherShownAction
  | LauncherHiddenAction
  | HideLauncherAction
  | ShowLauncherAction
  | ToggleLauncherAction
