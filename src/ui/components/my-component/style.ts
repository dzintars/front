import { css } from 'lit-element';

export default css`
  :host {
    display: block;
    padding: 10px;
    border: 1px solid var(--color-dodgerblue-main);
    border-radius: 6px;
  }

  :host([selected]) {
    background-color: var(--color-lawngreen-main);
    border-color: #339933;
  }
`;
