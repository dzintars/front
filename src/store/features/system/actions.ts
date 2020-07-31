import { createAction, ActionsUnion } from '../../actions'
import { SystemTypes, SystemActionTypes } from './types'
import { SystemState } from './models'

// ACTION CREATORS
const select = (id: string): SystemActionTypes => ({
  type: SystemTypes.SELECT,
  payload: {
    id,
  },
})

export const SystemActions = {
  select: (id: string) => createAction(SystemTypes.SELECT, { id }),
  loaded: () => createAction(SystemTypes.LOADED, null),
}

export type SystemActions = ActionsUnion<typeof SystemActions>
