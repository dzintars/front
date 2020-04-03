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
    background: var(--lt-color-light);
    border-radius: var(--app-button-radius);
    color: var(--lt-color-light-10d);
    padding: 0 1em;
    font-size: var(--text-md);
    outline: none;
  }
  button:hover {
    background: var(--lt-color-light-2d);
    cursor: pointer;
  }
`
