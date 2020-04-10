import { ThemeTypes, ThemeActionTypes } from './types'
import { ThemeState } from './models'

export { ThemeState }

const initialState: ThemeState = {
  active: 'light',
  light: {
    '--theme-color-hue': '0', // Base color, main theme color.
    '--theme-color-base': 'hsl(var(--theme-color-hue) 0% 100%)', // #FFFFFF (white)
    '--theme-color-primary': 'hsl(var(--theme-color-hue) 0% 100%)', // #FFFFFF (white)
    '--theme-color-primary-1d': 'hsl(var(--theme-color-hue) 0% 98%)', // #FAFAFA (white)
    '--theme-color-primary-2d': 'hsl(240 3% 94%)', // #EFEFF0 (white)
    '--theme-color-primary-3d': 'hsl(204 15% 94%)', // #ECEFF1 (white)
    '--theme-color-primary-4d': 'hsl(var(--theme-color-hue) 0% 82%)', // #D1D1D1
    '--theme-color-primary-10d': 'hsl(var(--theme-color-hue) 0% 0%)', // #000000 (black)
  },
  dark: {
    '--theme-color-hue': '215', // #FFFFFF (white)
    '--theme-color-base': 'hsl(var(--theme-color-hue) 14% 19%)', // #FFFFFF (white)
    '--theme-color-primary': 'hsl(var(--theme-color-hue) 14% 19%)',
    '--theme-color-primary-1d': 'hsl(var(--theme-color-hue) 14% 15%)',
    '--theme-color-primary-2d': 'hsl(var(--theme-color-hue) 14% 9%)',
    '--theme-color-primary-3d': 'hsl(var(--theme-color-hue) 9% 26%)',
    '--theme-color-primary-4d': 'hsl(var(--theme-color-hue) 9% 26%)',
    '--theme-color-primary-10d': 'hsl(var(--theme-color-hue) 3% 63%)',
  },
}

export default (state: ThemeState = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case ThemeTypes.SWITCH:
      // TODO: Conditional (ternary) operator
      if (state.active === 'light') {
        return {
          ...state,
          active: 'dark',
        }
      }
      return {
        ...state,
        active: 'light',
      }

    default:
      return state
  }
}
