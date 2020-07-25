import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    display: block;
    border: 1px solid red;
  }
`
