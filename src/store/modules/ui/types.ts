export enum UiTypes {
  LAUNCHER_TOGGLE = 'UI_LAUNCHER_TOGGLE',
  LAUNCHER_DISPLAY = 'UI_LAUNCHER_DISPLAY',
  LAUNCHER_DISPLAYED = 'UI_LAUNCHER_DISPLAYED',
  LAUNCHER_HIDE = 'UI_LAUNCHER_HIDE',
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
interface DisplayLauncherAction {
  readonly type: UiTypes.LAUNCHER_DISPLAY
  readonly meta: object
  readonly payload: object
}
interface HideLauncherAction {
  readonly type: UiTypes.LAUNCHER_HIDE
  readonly meta: object
  readonly payload: object
}
interface LauncherDisplayedAction {
  readonly type: UiTypes.LAUNCHER_DISPLAYED
  readonly meta: object
}
interface LauncherHiddenAction {
  readonly type: UiTypes.LAUNCHER_HIDDEN
  readonly meta: object
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
  | DisplayLauncherAction
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
