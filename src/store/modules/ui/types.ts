export enum UiTypes {
  LAUNCHER_TOGGLE = 'UI_LAUNCHER_TOGGLE',
  LAUNCHER_SHOW = 'UI_LAUNCHER_SHOW',
  LAUNCHER_HIDE = 'UI_LAUNCHER_HIDE',
  LAUNCHER_DISPLAYED = 'UI_LAUNCHER_DISPLAYED',
  LAUNCHER_HIDDEN = 'UI_LAUNCHER_HIDDEN',
  ACCOUNT_WIDGET_TOGGLE = 'UI_ACCOUNT_WIDGET_TOGGLE',
  ACCOUNT_WIDGET_DISPLAY = 'UI_ACCOUNT_WIDGET_DISPLAY',
  APPLICATION_LOAD = 'UI_APPLICATION_LOAD',
  APPLICATION_LOADING = 'UI_APPLICATION_LOADING',
  APPLICATION_LOADED = 'UI_APPLICATION_LOADED',
  APPLICATION_CLOSE = 'UI_APPLICATION_CLOSE',
  APPLICATION_CLOSED = 'UI_APPLICATION_CLOSED',
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
interface ToggleAccountWidgetAction {
  readonly type: UiTypes.ACCOUNT_WIDGET_TOGGLE
}
interface DisplayAccountWidgetAction {
  readonly type: UiTypes.ACCOUNT_WIDGET_DISPLAY
}
interface LoadApplicationAction {
  readonly type: UiTypes.APPLICATION_LOAD
}
interface LoadingApplicationAction {
  readonly type: UiTypes.APPLICATION_LOADING
}
interface LoadedApplicationAction {
  readonly type: UiTypes.APPLICATION_LOADED
}
interface CloseApplicationAction {
  readonly type: UiTypes.APPLICATION_CLOSE
}
interface ClosedApplicationAction {
  readonly type: UiTypes.APPLICATION_CLOSED
}

export type UiActionTypes =
  | ToggleLauncherAction
  | ShowLauncherAction
  | HideLauncherAction
  | LauncherDisplayedAction
  | LauncherHiddenAction
  | ToggleAccountWidgetAction
  | DisplayAccountWidgetAction
  | LoadApplicationAction
  | LoadingApplicationAction
  | LoadedApplicationAction
  | CloseApplicationAction
  | ClosedApplicationAction
