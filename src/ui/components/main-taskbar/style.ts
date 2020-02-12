import { css } from 'lit-element'

export default css`
  :host {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--color-gray-60);
    border-bottom: 1px solid var(--color-gray-70);
    color: var(--color-gray-210);
    margin: 0;
    box-shadow: var(--shadow-8);
    box-sizing: border-box;
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
  }
  button:hover {
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
