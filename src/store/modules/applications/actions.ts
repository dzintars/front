// import { createAction, ActionsUnion } from '../../actions'
import { ApplicationTypes, ApplicationActionTypes } from './types'
import { Application } from './models'

export const selectApplication = (uuid: string): ApplicationActionTypes => ({
  type: ApplicationTypes.SELECT,
  uuid,
})

export const fetchApplicationList = (): ApplicationActionTypes => ({
  type: ApplicationTypes.LIST_FETCH,
})

export const fetchApplicationListRequest = (): ApplicationActionTypes => ({
  type: ApplicationTypes.LIST_FETCH_REQUEST,
})

export const fetchApplicationListSuccess = (applications: Application[]): ApplicationActionTypes => ({
  type: ApplicationTypes.LIST_FETCH_SUCCESS,
  applications,
})

export const fetchApplicationListFailure = (error: Error): ApplicationActionTypes => ({
  type: ApplicationTypes.LIST_FETCH_FAILURE,
  error,
})

export const fetchApplication = (uuid: string): ApplicationActionTypes => ({
  type: ApplicationTypes.FETCH,
  uuid,
})

export const fetchApplicationRequest = (uuid: string): ApplicationActionTypes => ({
  type: ApplicationTypes.FETCH_REQUEST,
  uuid,
})

export const fetchApplicationSuccess = (application: Application): ApplicationActionTypes => ({
  type: ApplicationTypes.FETCH_SUCCESS,
  application,
})

export const fetchApplicationFailure = (uuid: string, error: Error): ApplicationActionTypes => ({
  type: ApplicationTypes.FETCH_FAILURE,
  uuid,
  error,
})

// export const ApplicationActions = {
//   fetchApplicationFailure: (uuid: string, error: Error) =>
//     createAction(ApplicationTypes.FETCH_FAILURE, {
//       uuid,
//       error,
//       name: error.name,
//       message: error.message,
//       stack: error.stack,
//     }),
// }

// export type ApplicationActions = ActionsUnion<typeof ApplicationActions>
