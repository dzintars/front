import { createSelector } from 'reselect'
import { RootState } from '../../reducer'

const getState = (state: RootState) => state.launcher

// TODO: Refactor namespace
//eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LauncherSelectors {
  export const getVisibility = createSelector([getState], launcher => launcher.isVisible)
}
