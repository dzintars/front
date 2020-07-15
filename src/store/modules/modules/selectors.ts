import { createSelector, createStructuredSelector } from 'reselect'
import { RootState } from '../../reducer'

// INPUT/ORIGIN SELECTORS
const getAllModules = (state: RootState) => state.modules
const getModuleId = (state: RootState, { moduleId }) => moduleId

// MEMOIZED SELECTORS
export const selectAllModules = createSelector([getAllModules], state => state.allIds.map(id => state.byId[id]).sort())

export const selectModule = createSelector([selectAllModules, getModuleId], (modules, moduleId) => modules[moduleId])

export const selectModuleById = createSelector([getAllModules, getModuleId], (modules, moduleId) => {
  console.log('A', modules.byId[moduleId])
  return modules.byId[moduleId]
})

export const selectModuleName = createSelector([selectModuleById], module => {
  console.log('B:', module.title)
  return module.title
})

export const selectModuleSummary = createStructuredSelector({
  id: getModuleId,
  title: selectModuleName,
})
