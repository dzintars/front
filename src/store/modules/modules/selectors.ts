import { createSelector } from 'reselect'
import { RootState } from '../../reducer'

const getState = (state: RootState) => state.modules

// TODO: Refactor namespace
//eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ModuleSelectors {
  export const entities = createSelector([getState], state => state.entities)

  export const modules = createSelector([getState], state => state.ids.map(uuid => state.entities[uuid]).sort())
}
