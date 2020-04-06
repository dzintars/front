import { ThemeTypes, ThemeActionTypes } from './types'
import { ThemeState } from './models'

export { ThemeState }

const initialState: ThemeState = {
  active: 'light',
  light: {
    '--theme-color-primary': 'hsl(0 0% 100%)', // #FFFFFF (white)
    '--theme-color-primary-1d': 'hsl(0 0% 98%)', // #FAFAFA (white)
    '--theme-color-primary-2d': 'hsl(240 3% 94%)', // #EFEFF0 (white)
    '--theme-color-primary-3d': 'hsl(204 15% 94%)', // #ECEFF1 (white)
    '--theme-color-primary-4d': 'hsl(0 0% 82%)', // #D1D1D1
    '--theme-color-primary-10d': 'hsl(0 0% 0%)', // #000000 (black)
  },
  dark: {
    '--theme-color-primary': 'hsl(212 14% 19%)',
    '--theme-color-primary-1d': 'hsl(213 14% 15%)',
    '--theme-color-primary-2d': 'hsl(210 14% 9%)',
    '--theme-color-primary-3d': 'hsl(215 9% 26%)',
    '--theme-color-primary-4d': 'hsl(215 9% 26%)',
    '--theme-color-primary-10d': 'hsl(210 3% 63%)',
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

// base color
// Accent
// hove
// active
//

// --color-dodgerblue-10l: hsla(215, 100%, 95%, 1); // #E7F1FF
// --color-dodgerblue-9l: hsla(216, 100%, 91%, 1); // #D0E3FF
// --color-dodgerblue-8l: hsla(215, 100%, 86%, 1); // #B9D6FF
// --color-dodgerblue-7l: hsla(215, 100%, 82%, 1); // #A2C8FF
// --color-dodgerblue-6l: hsla(215, 100%, 77%, 1); // #8BBBFF
// --color-dodgerblue-5l: hsla(215, 100%, 73%, 1); // #73ADFF
// --color-dodgerblue-4l: hsla(215, 100%, 68%, 1); // #5CA0FF
// --color-dodgerblue-3l: hsla(215, 100%, 64%, 1); // #4592FF
// --color-dodgerblue-2l: hsla(215, 100%, 59%, 1); // #2E85FF
// --color-dodgerblue-1l: hsla(215, 100%, 55%, 1); // #1777FF
// --color-dodgerblue-main: hsla(215, 100%, 50%, 1); // #006AFF // Base color
// --color-dodgerblue-1d: hsla(215, 100%, 45%, 1); // #0061E8
// --color-dodgerblue-2d: hsla(215, 100%, 41%, 1); // #0057D1
// --color-dodgerblue-3d: hsla(215, 100%, 36%, 1); // #004EBA
// --color-dodgerblue-4d: hsla(215, 100%, 32%, 1); // #0044A3
// --color-dodgerblue-5d: hsla(215, 100%, 27%, 1); // #003A8C
// --color-dodgerblue-6d: hsla(215, 100%, 23%, 1); // #003174
// --color-dodgerblue-7d: hsla(215, 100%, 18%, 1); // #00275D
// --color-dodgerblue-8d: hsla(215, 100%, 14%, 1); // #001D46
// --color-dodgerblue-9d: hsla(214, 100%, 9%, 1); // #00142f
// --color-dodgerblue-10d: hsla(215, 100%, 5%, 1); // #000A18

// --color-white: hsla(0, 100%, 100%, 1); // #ffffff
// --color-gray-10: hsla(30, 17%, 98%, 1); // #faf9f8
// --color-gray-20: hsla(30, 8%, 95%, 1); // #f3f2f1
// --color-gray-30: hsla(30, 10%, 92%, 1); // #edebe9
// --color-gray-40: hsla(30, 6%, 87%, 1); // #e1dfdd
// --color-gray-50: hsla(30, 4%, 82%, 1); // #d2d0ce
// --color-gray-60: hsla(30, 4%, 78%, 1); // #c8c6c4
// --color-gray-70: hsla(30, 4%, 73%, 1); // #bebbb8
// --color-gray-80: hsla(30, 4%, 69%, 1); // #b3b0ad
// --color-gray-90: hsla(30, 2%, 62%, 1); // #a19f9d
// --color-gray-100: hsla(30, 2%, 58%, 1); // #979593
// --color-gray-110: hsla(30, 2%, 53%, 1); // #8a8886
// --color-gray-120: hsla(30, 2%, 47%, 1); // #797775
// --color-gray-130: hsla(30, 2%, 37%, 1); // #605e5c
// --color-gray-140: hsla(30, 3%, 27%, 1); // #484644
// --color-gray-150: hsla(30, 2%, 23%, 1); // #3b3a39
// --color-gray-160: hsla(30, 2%, 19%, 1); // #323130
// --color-gray-170: hsla(30, 3%, 16%, 1); // #292827
// --color-gray-180: hsla(30, 3%, 14%, 1); // #252423
// --color-gray-190: hsla(30, 3%, 12%, 1); // #201f1e
// --color-gray-200: hsla(30, 4%, 10%, 1); // #1b1a19
// --color-gray-210: hsla(30, 5%, 8%, 1); // #161514
// --color-gray-220: hsla(30, 6%, 6%, 1); // #11100f
// --color-black: hsla(0, 0%, 0%, 1); // #000000
