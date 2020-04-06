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

  ACTION_CENTER_TOGGLE = 'UI_ACTION_CENTER_TOGGLE',
  ACTION_CENTER_DISPLAY = 'UI_ACTION_CENTER_DISPLAY',
  ACTION_CENTER_DISPLAYED = 'UI_ACTION_CENTER_DISPLAYED',
  ACTION_CENTER_HIDE = 'UI_ACTION_CENTER_HIDE',
  ACTION_CENTER_HIDDEN = 'UI_ACTION_CENTER_HIDDEN',
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

interface ToggleActionCenterAction {
  readonly type: UiTypes.ACTION_CENTER_TOGGLE
  readonly meta: object
}
interface DisplayActionCenterAction {
  readonly type: UiTypes.ACTION_CENTER_DISPLAY
  readonly meta: object
}
interface ActionCenterDisplayedAction {
  readonly type: UiTypes.ACTION_CENTER_DISPLAYED
  readonly meta: object
}
interface HideActionCenterAction {
  readonly type: UiTypes.ACTION_CENTER_HIDE
  readonly meta: object
}
interface ActionCenterHiddenAction {
  readonly type: UiTypes.ACTION_CENTER_HIDDEN
  readonly meta: object
}

export type UiActionTypes =
  | ToggleLauncherAction
  | DisplayLauncherAction
  | LauncherDisplayedAction
  | HideLauncherAction
  | LauncherHiddenAction
  | ToggleAccountWidgetAction
  | DisplayAccountWidgetAction
  | LoadApplicationAction
  | LoadingApplicationAction
  | LoadedApplicationAction
  | CloseApplicationAction
  | ClosedApplicationAction
  | ToggleActionCenterAction
  | DisplayActionCenterAction
  | ActionCenterDisplayedAction
  | HideActionCenterAction
  | ActionCenterHiddenAction
