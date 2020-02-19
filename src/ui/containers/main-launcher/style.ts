import { css } from 'lit-element'

export default css`
  :host {
    display: block;
  }
  :host([hidden]) {
    display: none;
  }

  ui-launcher {
    position: absolute;
    display: flex;
    flex-direction: column;
    background: var(--color-gray-20);
    height: 100%;
    width: 30%;
    z-index: 2;
  }

  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--size-sl);
    width: var(--size-sl);
    background-color: unset;
    /* background-color: var(--color-gray-60); */
    border: none;
    outline: none;
  }
  button:hover {
    background-color: var(--color-gray-40);
  }
  button:active {
    background-color: var(--color-gray-50);
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
  svg .primary {
    stroke: red;
  }
  application-shortcut {
    margin: 1rem;
    width: 200px;
  }
`
