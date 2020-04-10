import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: var(--size-l);
    background: var(--theme-color-primary);
    /* border: 10px solid var(--color-dodgerblue-main); */
    color: var(--color-gray-210);
    box-shadow: var(--shadow-64);
    box-sizing: border-box;
    height: calc(100% - var(--size-l));
    width: 30%;
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
