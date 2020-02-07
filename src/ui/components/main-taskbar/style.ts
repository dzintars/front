import { css } from 'lit-element'

export default css`
  :host {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--color-dodgerblue-8d);
    color: var(--color-dodgerblue-8l);
    margin: 0;
  }
  a {
    color: var(--color-dodgerblue-8l);
    padding-left: 10px;
  }
  p {
    margin: 0;
  }
`
