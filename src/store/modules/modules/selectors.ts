import { createSelector, createStructuredSelector } from 'reselect'
import { RootState } from '../../reducer'

// INPUT/BASE/ORIGIN SELECTORS
const getState = (state: RootState) => state.modules
const getApplications = (state: RootState) => state.applications.entities
const getModuleId = (state: RootState, { moduleId }): string => moduleId
const getApplicationId = (state: RootState, { applicationId }): string => applicationId

// MEMOIZED SELECTORS
export const selectAllIds = createSelector([getState], state => state.ids)
export const selectAllModules = createSelector([getState], state => state.entities)

export const selectAllModulesArray = createSelector([getState, selectAllIds], (state, allIds) =>
  allIds.map(id => state.entities[id]).sort()
)

export const selectModuleById = createSelector([getState, getModuleId], (modules, moduleId) => {
  // console.log('A', modules.entities[moduleId])
  return modules.entities[moduleId]
})

export const selectModuleName = createSelector([selectModuleById], module => {
  // console.log('B:', module.title)
  return module.title
})

export const selectModulesIdsByApplicationId = createSelector(
  [getApplications, getApplicationId],
  (applications, id) => {
    // console.log('Modules: ', applications[id].modules)
    return applications[id].modules || []
  }
)

export const selectModulesByApplicationId = createSelector(
  [selectAllModules, selectModulesIdsByApplicationId],
  (modules, ids) => {
    // console.log('Modules: ', ids.map(id => modules[id]).sort())
    return ids.map(id => modules[id])
  }
)

export const selectModuleSummary = createStructuredSelector({
  id: getModuleId,
  title: selectModuleName,
})
