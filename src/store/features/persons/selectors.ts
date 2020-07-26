import { createSelector } from 'reselect'
import { RootState } from '../../reducer'

const getState = (state: RootState) => state.persons

// TODO: Refactor namespace
//eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PersonSelectors {
  export const selected = createSelector([getState], state => state.selected)

  export const entities = createSelector([getState], state => state.entities)

  export const persons = createSelector([getState], state => state.ids.map(uuid => state.entities[uuid]).sort())

  export const person = createSelector([selected, entities], (selected, entities) => entities[selected])

  export const shouldFetch = createSelector(
    [person],
    person => person === undefined // && state.fetching === false
  )
}
