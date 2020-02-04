import { createSelector } from 'reselect'

import { RootState } from '../../reducer'

const getState = (state: RootState) => state.applications

//eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ApplicationSelectors {
  export const selected = createSelector(
    [getState],
    state => state.selected
  )

  export const entities = createSelector(
    [getState],
    state => state.entities
  )

  export const applications = createSelector(
    [getState],
    state => state.ids.map(uuid => state.entities[uuid]).sort()
  )

  export const application = createSelector(
    [selected, entities],
    (selected, entities) => entities[selected]
  )

  export const shouldFetch = createSelector(
    [application],
    application => application === undefined // && state.fetching === false
  )
}
