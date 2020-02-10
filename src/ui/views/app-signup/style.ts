import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    height: 100%;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 10px solid pink;
    /* overflow: hidden; */
  }
  main-taskbar {
    height: var(--size-sl, 48px);
    min-height: var(--size-sl, 48px);
  }
`
