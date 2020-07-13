import { css } from 'lit-element'

export default css`
  * {
    box-sizing: border-box;
  }
  :host {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
    cursor: pointer;
  }

  :host(:hover) {
    background-color: var(--color-gray-40);
    /* box-shadow: var(--theme-shadow-8); */
  }

  p {
    line-height: 1;
  }

  svg {
    stroke: black;
    fill: white;
  }
`
