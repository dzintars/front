import { ThemeTypes, ThemeActionTypes } from './types'

export const switchTheme = (): ThemeActionTypes => ({
  type: ThemeTypes.SWITCH,
})
