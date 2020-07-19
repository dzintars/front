import { createSelector } from 'reselect'
import { RootState } from '../../reducer'

// INPUT/BASE SELECTORS
const getState = (state: RootState) => state.applications
const getApplicationId = (state: RootState, { applicationId }) => applicationId

// MEMOIZED SELECTORS
// export const shouldFetch = createSelector(
//   [application],
//   application => application === undefined // && state.fetching === false
// )

export const selectAllIds = createSelector([getState], state => state.ids)
export const selectAllApplications = createSelector([getState], state => state.entities)

export const selectAllApplicationsArray = createSelector([getState, selectAllIds], (state, allIds) => {
  // To return applications in specific order, i should map over allIds
  return allIds.map(id => state.entities[id]).sort() // Returns an array!!!
})

export const selectApplicationById = createSelector(
  [selectAllApplications, getApplicationId],
  (applications, getApplicationId) => {
    // console.log('Applications: ', applications[getApplicationId])
    return applications[getApplicationId]
  }
)

export const selectApplicationName = createSelector([selectApplicationById], application => application.title)

export const selectApplicationModules = createSelector([selectApplicationById], application => {
  // console.log('Modules: ', application.modules)
  return application.modules || []
})

export const selectSelectedApplication = createSelector([getState], state => state.selected)
