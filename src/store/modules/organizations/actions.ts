import { OrganizationTypes, OrganizationActionTypes } from './types'
import { Organization } from './models'

export const selectOrganization = (uuid: string): OrganizationActionTypes => ({
  type: OrganizationTypes.SELECT,
  uuid,
})

export const fetchOrganizationList = (): OrganizationActionTypes => ({
  type: OrganizationTypes.LIST_FETCH,
})

export const fetchOrganizationListRequest = (): OrganizationActionTypes => ({
  type: OrganizationTypes.LIST_FETCH_REQUEST,
})

export const fetchOrganizationListSuccess = (organizations: Organization[]): OrganizationActionTypes => ({
  type: OrganizationTypes.LIST_FETCH_SUCCESS,
  organizations,
})

export const fetchOrganizationListFailure = (error: Error): OrganizationActionTypes => ({
  type: OrganizationTypes.LIST_FETCH_FAILURE,
  error,
})

export const fetchOrganization = (uuid: string): OrganizationActionTypes => ({
  type: OrganizationTypes.FETCH,
  uuid,
})

export const fetchOrganizationRequest = (uuid: string): OrganizationActionTypes => ({
  type: OrganizationTypes.FETCH_REQUEST,
  uuid,
})

export const fetchOrganizationSuccess = (organization: Organization): OrganizationActionTypes => ({
  type: OrganizationTypes.FETCH_SUCCESS,
  organization,
})

export const fetchOrganizationFailure = (uuid: string, error: Error): OrganizationActionTypes => ({
  type: OrganizationTypes.FETCH_FAILURE,
  uuid,
  error,
})
