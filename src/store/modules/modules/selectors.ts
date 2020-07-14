import { createSelector, createStructuredSelector } from 'reselect'
import { RootState } from '../../reducer'

// INPUT/ORIGIN SELECTORS
const getAllModules = (state: RootState) => state.modules
const getModuleId = (state: RootState, { moduleId }) => moduleId

// MEMOIZED SELECTORS
export const selectAllModules = createSelector([getAllModules], state =>
  state.ids.map(uuid => state.entities[uuid]).sort()
)

export const selectModule = createSelector([selectAllModules, getModuleId], (modules, moduleId) => modules[moduleId])

export const selectModuleById = createSelector([getAllModules, getModuleId], (modules, moduleId) => {
  console.log('A', modules.entities[moduleId])
  return modules.entities[moduleId]
})

export const selectModuleName = createSelector([selectModuleById], module => {
  console.log('B:', module.title)
  return module.title
})

export const selectModuleSummary = createStructuredSelector({
  id: getModuleId,
  // name: selectModuleName,
})
