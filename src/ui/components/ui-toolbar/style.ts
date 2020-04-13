import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    --background-color: var(--theme-color-accent-110, red);
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border: 5px dotted green; */
    min-height: var(--theme-size-m);
    background-color: var(--background-color, pink);
  }
`
