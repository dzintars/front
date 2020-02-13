import { css } from 'lit-element'

export default css`
  :host {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--color-gray-20);
    border: 10px solid var(--color-dodgerblue-main);
    color: var(--color-gray-210);
    margin: 0;
    box-shadow: var(--shadow-64);
    box-sizing: border-box;
    height: 100%;
    width: 30%;
    z-index: 2;
  }
  a {
    color: var(--color-gray-210);
    padding-left: 10px;
  }
  p {
    margin: 0;
  }
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--size-sl);
    width: var(--size-sl);
    background-color: var(--color-gray-60);
    border: none;
    outline: none;
  }
  button:hover {
    background-color: var(--color-gray-70);
  }
  button:active {
    background-color: var(--color-gray-80);
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
  svg .primary {
    stroke: red;
  }
`
