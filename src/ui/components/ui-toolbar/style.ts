import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border: 5px dotted green; */
    min-height: var(--size-m);
  }
`
