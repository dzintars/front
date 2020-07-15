import { createSelector } from 'reselect'
import { RootState } from '../../reducer'

// INPUT SELECTORS
const getState = (state: RootState) => state.applications
const getApplicationId = (state: RootState, { getApplicationId }) => getApplicationId

// MEMOIZED SELECTORS
// export const shouldFetch = createSelector(
//   [application],
//   application => application === undefined // && state.fetching === false
// )

export const selectAllIds = createSelector([getState], state => state.allIds)

export const selectAllApplications = createSelector([getState, selectAllIds], (state, allIds) => {
  // To return applications in specific order, i should map over allIds
  return allIds.map(id => state.byId[id]).sort()
})

export const selectApplicationById = createSelector(
  [selectAllApplications, getApplicationId],
  (applications, getApplicationId) => applications[getApplicationId]
)

export const selectApplicationName = createSelector([selectApplicationById], application => application.title)

export const selectApplicationModules = createSelector(
  [selectApplicationById],
  application => application.modules || []
)

export const selectSelectedApplication = createSelector([getState], state => state.selected)
