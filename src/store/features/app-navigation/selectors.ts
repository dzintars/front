import { createSelector } from 'reselect'
import { RootState } from '../../reducer'
import { ApplicationsState } from '../applications'
import { AppNavigationState } from './reducer'

// INPUT/BASE SELECTORS
const getState = (state: RootState): AppNavigationState => state.appModules
const getApplicationState = (state: RootState): ApplicationsState => state.applications

// MEMOIZED SELECTORS
const selectFetchState = createSelector([getState], state => state.fetching)
const selectSelectedModuleId = createSelector([getState], state => state.selected)

const selectAllIds = createSelector([getState], state => state.ids)
const selectAllModules = createSelector([getState], state => state.entities)

const selectAllModulesArray = createSelector([getState, selectAllIds], (state, allIds) => {
  // To return applications in specific order, i should map over allIds
  if (!allIds) {
    // Current user not found
    return []
  }
  return allIds.map(id => state.entities[id]) // Returns an array!!!
})

const selectModuleById = createSelector([selectAllModules, selectSelectedModuleId], (entities, id) => {
  // console.log('Applications: ', applications[getApplicationId])
  return entities[id]
})

const selectModuleName = createSelector([selectModuleById], application => application.title)

const selectCurrentApplicationId = createSelector([getApplicationState], state => state.currentApplication)

const selectCurrentApplicationPermalink = createSelector(
  [getApplicationState, selectCurrentApplicationId],
  (state, id) => {
    console.log('Selector ID:', state)
    // if (!state.hasOwnProperty(id)) {
    //   // Current user not found
    //   return {}
    // }
    return state.entities[id].permalink
  }
)

export const AppNavigationSelectors = {
  selectFetchState,
  selectSelectedModuleId,
  selectAllIds,
  selectAllModules,
  selectAllModulesArray,
  selectModuleById,
  selectModuleName,
  selectCurrentApplicationId,
  selectCurrentApplicationPermalink,
}
