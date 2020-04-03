export enum ThemeTypes {
  SWITCH = 'THEME_SWITCH',
}

interface SwitchThemeAction {
  readonly type: ThemeTypes.SWITCH
}

export type ThemeActionTypes = SwitchThemeAction
