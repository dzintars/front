export enum UiTypes {
  LAUNCHER_TOGGLE = 'UI_LAUNCHER_TOGGLE',
  LAUNCHER_SHOW = 'UI_LAUNCHER_SHOW',
  LAUNCHER_HIDE = 'UI_LAUNCHER_HIDE',
  LAUNCHER_DISPLAYED = 'UI_LAUNCHER_DISPLAYED',
  LAUNCHER_HIDDEN = 'UI_LAUNCHER_HIDDEN',
}

interface ToggleLauncherAction {
  readonly type: UiTypes.LAUNCHER_TOGGLE
  readonly meta: object
}

interface ShowLauncherAction {
  readonly type: UiTypes.LAUNCHER_SHOW
}

interface HideLauncherAction {
  readonly type: UiTypes.LAUNCHER_HIDE
}

interface LauncherDisplayedAction {
  readonly type: UiTypes.LAUNCHER_DISPLAYED
}

interface LauncherHiddenAction {
  readonly type: UiTypes.LAUNCHER_HIDDEN
}

export type UiActionTypes =
  | ToggleLauncherAction
  | ShowLauncherAction
  | HideLauncherAction
  | LauncherDisplayedAction
  | LauncherHiddenAction
