import { css } from 'lit-element'

export default css`
  :host {
    display: block;
    background: var(--color-gray-20);
    /* border: 10px solid var(--color-dodgerblue-main); */
    color: var(--color-gray-210);
    box-shadow: var(--shadow-64);
    box-sizing: border-box;
  }
  :host([hidden]) {
    display: none;
  }
`
