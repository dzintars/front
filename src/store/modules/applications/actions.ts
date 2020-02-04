import { createAction, ActionsUnion } from '../../actions'
import { Application } from './model'

export enum ApplicationTypes {
  APPLICATION_SELECT = 'APPLICATION_SELECT',

  APPLICATION_LIST_FETCH = 'APPLICATION_LIST_FETCH',
  APPLICATION_LIST_FETCH_REQUEST = 'APPLICATION_LIST_FETCH_REQUEST',
  APPLICATION_LIST_FETCH_SUCCESS = 'APPLICATION_LIST_FETCH_SUCCESS',
  APPLICATION_LIST_FETCH_FAILURE = 'APPLICATION_LIST_FETCH_FAILURE',

  APPLICATION_FETCH = 'APPLICATION_FETCH',
  APPLICATION_FETCH_REQUEST = 'APPLICATION_FETCH_REQUEST',
  APPLICATION_FETCH_SUCCESS = 'APPLICATION_FETCH_SUCCESS',
  APPLICATION_FETCH_FAILURE = 'APPLICATION_FETCH_FAILURE',
}

export const ApplicationActions = {
  selectApplication: (uuid: string) =>
    createAction(ApplicationTypes.APPLICATION_SELECT, { uuid }),

  fetchApplicationList: () => createAction(ApplicationTypes.APPLICATION_LIST_FETCH),

  fetchApplicationListRequest: () =>
    createAction(ApplicationTypes.APPLICATION_LIST_FETCH_REQUEST),

  fetchApplicationListSuccess: (applications: Application[]) =>
    createAction(ApplicationTypes.APPLICATION_LIST_FETCH_SUCCESS, {
      applications,
    }),

  fetchApplicationListFailure: (error: Error) =>
    createAction(ApplicationTypes.APPLICATION_LIST_FETCH_FAILURE, { error }),

  fetchApplication: (uuid: string) =>
    createAction(ApplicationTypes.APPLICATION_FETCH, { uuid }),

  fetchApplicationRequest: (uuid: string) =>
    createAction(ApplicationTypes.APPLICATION_FETCH_REQUEST, { uuid }),

  fetchApplicationSuccess: (application: Application) =>
    createAction(ApplicationTypes.APPLICATION_FETCH_SUCCESS, { application }),
    
  fetchApplicationFailure: (uuid: string, error: Error) =>
    createAction(ApplicationTypes.APPLICATION_FETCH_FAILURE, {
      uuid,
      error,
      name: error.name,
      message: error.message,
      stack: error.stack,
    }),
}

export type ApplicationActions = ActionsUnion<typeof ApplicationActions>
