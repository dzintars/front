import { css } from 'lit-element'

export default css`
  :host {
    display: block;
    padding: 10px;
    border: 1px solid var(--color-gray-40);
    border-radius: 6px;
    background: var(--color-gray-30);
    box-shadow: var(--shadow-4);
  }

  :host([selected]) {
    background-color: var(--color-success-1l);
    border-color: #339933;
  }

  :host(:hover) {
    background-color: var(--color-gray-40);
    box-shadow: var(--shadow-8);
  }

  :host([selected]:hover) {
    background-color: var(--color-success);
    box-shadow: var(--shadow-8);
  }

  :host(:focus),
  :host(:focus-within) {
    border: 3px solid red;
  }
`
