import { css } from 'lit-element'

export default css`
  * {
    box-sizing: border-box;
  }
  :host {
    display: block;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: var(--theme-color-primary-1d);
    box-shadow: var(--theme-shadow-4);
    color: var(--theme-color-primary-10d);
  }

  :host(:hover) {
    background-color: var(--color-gray-40);
    box-shadow: var(--theme-shadow-16);
  }
`
