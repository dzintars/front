import { css } from 'lit-element'

export default css`
  * {
    box-sizing: border-box;
  }
  :host {
    display: block;
    padding: 1rem;
    box-sizing: border-box;
    /* background-color: var(--theme-color-primary-1d);
    box-shadow: var(--theme-shadow-4);
    color: var(--theme-color-primary-10d);
    width: auto; */
    cursor: pointer;
  }

  :host(:hover) {
    background-color: var(--color-gray-40);
    /* box-shadow: var(--theme-shadow-8); */
  }
`
