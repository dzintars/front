const theme = {
  // Global hue
  '--theme-color-base-hue': '0',
  '--theme-color-accent-hue': '215',
  '--theme-color-success-hue': '100',
  '--theme-color-warning-hue': '44',
  '--theme-color-alert-hue': '3',
  '--theme-color-neutral-hue': '30',
  // B&W
  '--theme-color-white': 'hsla(0, 100%, 100%, 1)',
  '--theme-color-black': 'hsla(0, 0%, 0%, 1)',
  // Theme Base - Used for base layout, backgrounds, inputs
  '--theme-color-base-10': 'hsla(var(--theme-color-base-hue, 0), 100%, 95%, 1)',
  '--theme-color-base-20': 'hsla(var(--theme-color-base-hue, 0), 100%, 91%, 1)',
  '--theme-color-base-30': 'hsla(var(--theme-color-base-hue, 0), 100%, 86%, 1)',
  '--theme-color-base-40': 'hsla(var(--theme-color-base-hue, 0), 100%, 82%, 1)',
  '--theme-color-base-50': 'hsla(var(--theme-color-base-hue, 0), 100%, 77%, 1)',
  '--theme-color-base-60': 'hsla(var(--theme-color-base-hue, 0), 100%, 73%, 1)',
  '--theme-color-base-70': 'hsla(var(--theme-color-base-hue, 0), 100%, 68%, 1)',
  '--theme-color-base-80': 'hsla(var(--theme-color-base-hue, 0), 100%, 64%, 1)',
  '--theme-color-base-90': 'hsla(var(--theme-color-base-hue, 0), 100%, 59%, 1)',
  '--theme-color-base-100': 'hsla(var(--theme-color-base-hue, 0), 100%, 55%, 1)',
  '--theme-color-base-110': 'hsla(var(--theme-color-base-hue, 0), 100%, 50%, 1)',
  '--theme-color-base-120': 'hsla(var(--theme-color-base-hue, 0), 100%, 45%, 1)',
  '--theme-color-base-130': 'hsla(var(--theme-color-base-hue, 0), 100%, 41%, 1)',
  '--theme-color-base-140': 'hsla(var(--theme-color-base-hue, 0), 100%, 36%, 1)',
  '--theme-color-base-150': 'hsla(var(--theme-color-base-hue, 0), 100%, 32%, 1)',
  '--theme-color-base-160': 'hsla(var(--theme-color-base-hue, 0), 100%, 27%, 1)',
  '--theme-color-base-170': 'hsla(var(--theme-color-base-hue, 0), 100%, 23%, 1)',
  '--theme-color-base-180': 'hsla(var(--theme-color-base-hue, 0), 100%, 18%, 1)',
  '--theme-color-base-190': 'hsla(var(--theme-color-base-hue, 0), 100%, 14%, 1)',
  '--theme-color-base-200': 'hsla(var(--theme-color-base-hue, 0), 100%, 9%, 1)',
  '--theme-color-base-210': 'hsla(var(--theme-color-base-hue, 0), 100%, 5%, 1)',
  // Theme Accent - Used for default buttons, UI borders, icons
  '--theme-color-accent-10': 'hsla(var(--theme-color-accent-hue, 215), 100%, 95%, 1)',
  '--theme-color-accent-20': 'hsla(var(--theme-color-accent-hue, 215), 100%, 91%, 1)',
  '--theme-color-accent-30': 'hsla(var(--theme-color-accent-hue, 215), 100%, 86%, 1)',
  '--theme-color-accent-40': 'hsla(var(--theme-color-accent-hue, 215), 100%, 82%, 1)',
  '--theme-color-accent-50': 'hsla(var(--theme-color-accent-hue, 215), 100%, 77%, 1)',
  '--theme-color-accent-60': 'hsla(var(--theme-color-accent-hue, 215), 100%, 73%, 1)',
  '--theme-color-accent-70': 'hsla(var(--theme-color-accent-hue, 215), 100%, 68%, 1)',
  '--theme-color-accent-80': 'hsla(var(--theme-color-accent-hue, 215), 100%, 64%, 1)',
  '--theme-color-accent-90': 'hsla(var(--theme-color-accent-hue, 215), 100%, 59%, 1)',
  '--theme-color-accent-100': 'hsla(var(--theme-color-accent-hue, 215), 100%, 55%, 1)',
  '--theme-color-accent-110': 'hsla(var(--theme-color-accent-hue, 215), 100%, 50%, 1)',
  '--theme-color-accent-120': 'hsla(var(--theme-color-accent-hue, 215), 100%, 45%, 1)',
  '--theme-color-accent-130': 'hsla(var(--theme-color-accent-hue, 215), 100%, 41%, 1)',
  '--theme-color-accent-140': 'hsla(var(--theme-color-accent-hue, 215), 100%, 36%, 1)',
  '--theme-color-accent-150': 'hsla(var(--theme-color-accent-hue, 215), 100%, 32%, 1)',
  '--theme-color-accent-160': 'hsla(var(--theme-color-accent-hue, 215), 100%, 27%, 1)',
  '--theme-color-accent-170': 'hsla(var(--theme-color-accent-hue, 215), 100%, 23%, 1)',
  '--theme-color-accent-180': 'hsla(var(--theme-color-accent-hue, 215), 100%, 18%, 1)',
  '--theme-color-accent-190': 'hsla(var(--theme-color-accent-hue, 215), 100%, 14%, 1)',
  '--theme-color-accent-200': 'hsla(var(--theme-color-accent-hue, 215), 100%, 9%, 1)',
  '--theme-color-accent-210': 'hsla(var(--theme-color-accent-hue, 215), 100%, 5%, 1)',
  // Theme Success
  '--theme-color-success-10': 'hsla(var(--theme-color-success-hue, 100), 100%, 38%, 1)',
  // Theme Warning
  '--theme-color-warning-10': 'hsla(var(--theme-color-warning-hue, 44), 98%, 50%, 1)',
  // Theme Alert
  '--theme-color-alert-10': 'hsla(var(--theme-color-alert-hue, 3), 98%, 46%, 1)',
  // Theme Neutral
  '--theme-color-neutral-10': 'hsla(var(--theme-color-neutral-hue, 30), 2%, 53%, 1)',
  // Icons
  '--theme-icon-size-s': '1.25em',
  '--theme-icon-size-m': '1.5em',
  '--theme-icon-size-l': '2.25em',
  // Size
  '--theme-size-xs': '1.625rem', // 26px
  '--theme-size-s': '1.875rem', // 30px
  '--theme-size-m': '2.25rem', // 36px
  '--theme-size-l': '2.75rem', // 44px
  '--theme-size-xl': '3.5rem', // 56px

  // --size-ss: 1.125rem; // 18px *
  // --size-xs: 1.625rem; // 26px+
  // --size-s: 1.875rem; // 30px+
  // --size-xm: 2rem; // 32px
  // --size-m: 2.25rem; // 36px+
  // --size-ml: 2.5rem; // 40px
  // --size-l: 2.75rem; // 44px+
  // --size-sl: 3em; // 48px;
  // --size-xl: 3.5rem; // 56px+
  // --size-xxl: 4.5rem; // 72px*

  // Spacing
  '--theme-space-xs': '0.25rem',
  '--theme-space-s': '0.5rem',
  '--theme-space-m': '1rem',
  '--theme-space-l': '1.5rem',
  '--theme-space-xl': '2.5rem',
  // Spacing wide - mostly used as paddings or margins
  '--theme-space-wide-xs': 'calc( var(--theme-space-xs, 0.25rem) / 2) var(--theme-space-xs, 0.25rem)',
  '--theme-space-wide-s': 'calc( var(--theme-space-s, 0.5rem) / 2) var(--theme-space-s, 0.5rem)',
  '--theme-space-wide-m': 'calc( var(--theme-space-m, 1rem) / 2) var(--theme-space-m, 1rem)',
  '--theme-space-wide-l': 'calc( var(--theme-space-l, 1.5rem) / 2) var(--theme-space-l, 1.5rem)',
  '--theme-space-wide-xl': 'calc( var(--theme-space-xl, 2.5rem) / 2) var(--theme-space-xl, 2.5rem)',
  // Spacing tall - mostly used as paddings or margins
  '--theme-space-tall-xs': 'var(--theme-space-xs, 0.25rem) calc( var(--theme-space-xs, 0.25rem) / 2)',
  '--theme-space-tall-s': 'var(--theme-space-s, 0.5rem) calc( var(--theme-space-s, 0.5rem) / 2)',
  '--theme-space-tall-m': 'var(--theme-space-m, 1rem) calc( var(--theme-space-m, 1rem) / 2)',
  '--theme-space-tall-l': 'var(--theme-space-l, 1.5rem) calc( var(--theme-space-l, 1.5rem) / 2)',
  '--theme-space-tall-xl': 'var(--theme-space-xl, 2.5rem) calc( var(--theme-space-xl, 2.5rem) / 2)',
  // Typography
  '--theme-font-family': 'Montserrat, sans-serif',
  '--theme-font-size-xxxl': '2.5rem',
  '--theme-font-size-xxl': '1.75rem',
  '--theme-font-size-xl': '1.375rem',
  '--theme-font-size-l': '1.125rem',
  '--theme-font-size-m': '1rem',
  '--theme-font-size-s': '0.875rem',
  '--theme-font-size-xs': '0.8125rem',
  '--theme-font-size-xxs': '0.75rem',
  '--theme-line-height-m': '1.625',
  '--theme-line-height-s': '1.375',
  '--theme-line-height-xs': '1.25',
  // Border radius
  '--lumo-border-radius-s': '0.25em',
  '--lumo-border-radius-m': '0.25em',
  '--lumo-border-radius-l': '0.5em',
  // Shadows
  '--theme-shadow-4': '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)', // Cards, Grid item thumbnails
  '--theme-shadow-8': '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)', // Command bars, Command dropdowns, Context menus
  '--theme-shadow-16': '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)', // Teaching callouts, Search results dropdown, Hover cards, Tooltips
  '--theme-shadow-64': '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)', // Panels, Pop up dialogs
}

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
