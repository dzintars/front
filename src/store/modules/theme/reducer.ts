import { ThemeTypes, ThemeActionTypes } from './types'
import { ThemeState } from './models'

export { ThemeState }

const initialState: ThemeState = {
  theme: { '--theme-color-primary': 'hsl(0 0% 100%)' },
}

export default (state: ThemeState = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case ThemeTypes.SWITCH:
      return { ...state, theme: { '--theme-color-primary': 'hsl(212 14% 19%)' } }

    default:
      return state
  }
}
