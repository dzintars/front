import { createSelector } from 'reselect'
import { RootState } from '../../reducer'
import { personEntityAdapter } from './reducer'

const getState = (state: RootState) => state.persons

const entityAdapterSelectors = personEntityAdapter.getSelectors(getState)
// this has some more pre-created selectors, experiment with it

// TODO: Refactor namespace
//eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PersonSelectors {
  export const selected = createSelector([getState], state => state.selected)

  export const entities = entityAdapterSelectors.selectEntities

  export const persons = createSelector([getState], state => state.ids.map(uuid => state.entities[uuid]).sort())

  export const person = createSelector([selected, entities], (selected, entities) => entities[selected])

  export const shouldFetch = createSelector(
    [person],
    person => person === undefined // && state.fetching === false
  )
}
