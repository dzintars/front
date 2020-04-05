import { css } from 'lit-element'

export default css`
  :host {
    margin: 0 0.25rem;
  }
  * {
    font-family: var(--font-main);
  }
  button {
    height: var(--size-xs);
    border: none;
    background: var(--theme-color-primary);
    border-radius: var(--app-button-radius);
    color: var(--theme-color-primary-10d);
    padding: 0 1em;
    font-size: var(--text-md);
    outline: none;
  }
  button:hover {
    background: var(--theme-color-primary-2d);
    cursor: pointer;
  }
`
