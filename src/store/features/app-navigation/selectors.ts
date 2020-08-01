import { createSelector } from 'reselect'
import { RootState } from '../../reducer'
import { ApplicationsState } from '../applications'
import { AppNavigationState } from './reducer'

// INPUT/BASE SELECTORS
const getState = (state: RootState): AppNavigationState => state.appModules
const getApplicationState = (state: RootState): ApplicationsState => state.applications

// MEMOIZED SELECTORS
export const selectFetchState = createSelector([getState], state => state.fetching)
export const selectSelectedModuleId = createSelector([getState], state => state.selected)

export const selectAllIds = createSelector([getState], state => state.ids)
export const selectAllModules = createSelector([getState], state => state.entities)

export const selectAllModulesArray = createSelector([getState, selectAllIds], (state, allIds) => {
  // To return applications in specific order, i should map over allIds
  return allIds.map(id => state.entities[id]) // Returns an array!!!
})

export const selectModuleById = createSelector([selectAllModules, selectSelectedModuleId], (entities, id) => {
  // console.log('Applications: ', applications[getApplicationId])
  return entities[id]
})

export const selectModuleName = createSelector([selectModuleById], application => application.title)

const selectCurrentApplicationId = createSelector([getApplicationState], state => state.currentApplication)

export const AppNavigationSelectors = {
  selectFetchState,
  selectAllModulesArray,
  selectCurrentApplicationId,
}
