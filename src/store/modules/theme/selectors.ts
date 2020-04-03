import { createSelector } from 'reselect'
import { RootState } from '../../reducer'
import { ThemeState } from './reducer'

const getState = (state: RootState): ThemeState => state.theme

// TODO: Refactor namespace
//eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ThemeSelectors {
  export const getTheme = createSelector([getState], state => state.theme)
  // export const getAccountWidgetVisibility = createSelector([getState], launcher => launcher.isAccountWidgetDisplayed)
}
