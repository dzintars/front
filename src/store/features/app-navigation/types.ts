import { AppNavigationTypes } from './constants'
import { AppModule, AppModules } from './models'

interface SelectModule {
  readonly type: AppNavigationTypes.SELECT_MODULE
  readonly payload: {
    id: string
  }
  readonly meta: object
}

interface ListFetchModules {
  readonly type: AppNavigationTypes.LIST_FETCH_MODULES
}

interface ListFetchModulesRequest {
  readonly type: AppNavigationTypes.LIST_FETCH_MODULES_REQUEST
  readonly meta: object
}

interface ListFetchModulesSuccess {
  readonly type: AppNavigationTypes.LIST_FETCH_MODULES_SUCCESS
  readonly payload: AppModules
}

interface ListFetchModulesFailure {
  readonly type: AppNavigationTypes.LIST_FETCH_MODULES_FAILURE
  readonly payload: {
    error: Error
  }
}

interface FetchModule {
  readonly type: AppNavigationTypes.FETCH_MODULE
  readonly payload: object
}

interface FetchModuleRequest {
  readonly type: AppNavigationTypes.FETCH_MODULE_REQUEST
  readonly payload: object
}

interface FetchModuleSuccess {
  readonly type: AppNavigationTypes.FETCH_MODULE_SUCCESS
  readonly payload: {
    module: AppModule
  }
}

interface FetchModuleFailure {
  readonly type: AppNavigationTypes.FETCH_MODULE_FAILURE
  readonly payload: {
    error: Error
  }
}

interface Loaded {
  readonly type: AppNavigationTypes.LOADED
  readonly payload: {
    appid: string
  }
}

interface ListModulesRequest {
  readonly type: AppNavigationTypes.LIST_MODULES_REQUEST
  readonly payload: {
    id: string
  }
}

interface ListModulesResponse {
  readonly type: AppNavigationTypes.LIST_MODULES_RESPONSE
  readonly payload: AppModules
}

interface ListModulesRpcResponse {
  readonly type: AppNavigationTypes.ListModulesResponse
  readonly payload: AppModules
}

export type AppNavigationActionTypes =
  | SelectModule
  | ListFetchModules
  | ListFetchModulesRequest
  | ListFetchModulesSuccess
  | ListFetchModulesFailure
  | FetchModule
  | FetchModuleRequest
  | FetchModuleSuccess
  | FetchModuleFailure
  | ListModulesRequest
  | ListModulesResponse
  | Loaded
  | ListModulesRpcResponse
