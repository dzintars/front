import { createSelector } from 'reselect'
import { RootState } from '../../reducer'

// INPUT SELECTORS
const getApplications = (state: RootState) => state.applications
const getApplicationModules = state => state.applicationModules

const getAllApplications = (state: RootState) => state.applications
const getAllApplicationIds = (state: RootState) => state.applications.allIds
const getApplicationId = (state: RootState, { getApplicationId }) => getApplicationId

// MEMOIZED SELECTORS
export const selected = createSelector([getApplications], state => state.selected)
export const defaultApplication = createSelector([getApplications], state => state.defaultApplication)

export const entities = createSelector([getApplications], state => state.byId)

export const applications = createSelector([getApplications], state => state.allIds.map(id => state.byId[id]).sort())

export const application = createSelector([selected, entities], (selected, entities) => entities[selected.uuid])

export const component = createSelector([application], application => application.component)

export const modules = createSelector([getApplications], (state, id) => state.entities[id].modules)

export const shouldFetch = createSelector(
  [application],
  application => application === undefined // && state.fetching === false
)

// Clean
export const selectApplicationById = createSelector(
  [getApplications, getApplicationId],
  (applications, getApplicationId) => applications.byId[getApplicationId]
)

export const selectAllApplications = createSelector(
  [getAllApplicationIds, getAllApplications],
  (allIds, applications) => allIds.map(id => applications[id]).sort()
)

export const selectApplicationName = createSelector([selectApplicationById], application => application.title)

export const selectApplication = createSelector(
  [getApplications, getApplicationId],
  (applications, getApplicationId) => applications[getApplicationId]
)

export const selectApplicationModules = createSelector(
  [getApplicationModules, getApplicationId],
  (applicationModules, applicationId) => applicationModules[applicationId] || []
)
