export interface UiState {
  readonly isLauncherDisplayed: boolean
  readonly isActionCenterDisplayed: boolean
  readonly isAccountWidgetDisplayed: boolean
  readonly application: {
    state: boolean
  }
}
