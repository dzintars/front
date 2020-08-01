import { createAction, ActionsUnion } from '../../actions'
import { AppNavigationTypes } from './constants'
import { AppNavigationActionTypes, AppModules, AppModule } from './types'
// import { AppModule, AppModules } from './models'
import { ApplicationActionTypes, ApplicationTypes } from '../applications/types'

export const selectModule = (id: string): AppNavigationActionTypes => ({
  type: AppNavigationTypes.SELECT_MODULE,
  payload: {
    id,
  },
  meta: { websocket: true },
})

export const fetchModulesList = (): AppNavigationActionTypes => ({
  type: AppNavigationTypes.LIST_FETCH_MODULES,
})

export const fetchModulesListRequest = (): AppNavigationActionTypes => ({
  type: AppNavigationTypes.LIST_FETCH_MODULES_REQUEST,
  meta: { websocket: true },
})

export const fetchModulesListSuccess = (payload: AppModules): AppNavigationActionTypes => ({
  type: AppNavigationTypes.LIST_FETCH_MODULES_SUCCESS,
  payload,
})

export const fetchModulesListFailure = (error: Error): AppNavigationActionTypes => ({
  type: AppNavigationTypes.LIST_FETCH_MODULES_FAILURE,
  payload: {
    error,
  },
})

export const fetchModule = (id: string): AppNavigationActionTypes => ({
  type: AppNavigationTypes.FETCH_MODULE,
  payload: {
    id,
  },
})

export const fetchModuleRequest = (id: string): AppNavigationActionTypes => ({
  type: AppNavigationTypes.FETCH_MODULE_REQUEST,
  payload: {
    id,
  },
})

export const fetchModuleSuccess = (module: AppModule): AppNavigationActionTypes => ({
  type: AppNavigationTypes.FETCH_MODULE_SUCCESS,
  payload: {
    module,
  },
})

export const fetchModuleFailure = (error: Error): AppNavigationActionTypes => ({
  type: AppNavigationTypes.FETCH_MODULE_FAILURE,
  payload: {
    error,
  },
})

const loaded = (appid: string): AppNavigationActionTypes => ({
  type: AppNavigationTypes.LOADED,
  payload: {
    appid,
  },
})

const listModulesRequest = (id: string): AppNavigationActionTypes => ({
  type: AppNavigationTypes.LIST_MODULES_REQUEST,
  payload: {
    id,
  },
})

const listModulesResponse = (payload: AppModules): AppNavigationActionTypes => ({
  type: AppNavigationTypes.LIST_MODULES_RESPONSE,
  payload,
})

export const AppNavigationActions = {
  selectModule,
  fetchModulesList,
  fetchModulesListRequest,
  fetchModulesListSuccess,
  fetchModulesListFailure,
  fetchModule,
  fetchModuleRequest,
  fetchModuleSuccess,
  fetchModuleFailure,
  listModulesRequest,
  listModulesResponse,
  loaded,
}

export const ModxActions = {
  fetchModulesList: () => createAction(AppNavigationTypes.LIST_FETCH_MODULES),
  fetchModulesListRequest: () => createAction(AppNavigationTypes.LIST_FETCH_MODULES_REQUEST),
  fetchModulesListSuccess: (payload: AppModules) =>
    createAction(AppNavigationTypes.LIST_FETCH_MODULES_SUCCESS, payload),
  fetchModulesListFailure: (error: Error) =>
    createAction(AppNavigationTypes.LIST_FETCH_MODULES_FAILURE, { payload: { error } }),
}

export type ModxActions = ActionsUnion<typeof ModxActions>
