import { css } from 'lit-element'

export default css`
  :host {
    display: block;
    width: 100%;
  }

  app-router {
    display: block;
  }
  main-taskbar {
    height: var(--size-sl, 48px);
  }
`
