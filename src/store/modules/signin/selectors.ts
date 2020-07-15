import { createSelector } from 'reselect'
import { RootState } from '../../reducer'

const getState = (state: RootState) => state.applications

// TODO: Refactor namespace
//eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ApplicationSelectors {
  export const selected = createSelector([getState], state => state.selected)
  export const defaultApplication = createSelector([getState], state => state.defaultApplication)

  export const entities = createSelector([getState], state => state.byId)

  export const applications = createSelector([getState], state => state.allIds.map(id => state.byId[id]).sort())

  export const application = createSelector([selected, entities], (selected, entities) => entities[selected.uuid])

  export const component = createSelector([application], application => application.component)

  export const shouldFetch = createSelector(
    [application],
    application => application === undefined // && state.fetching === false
  )
}
