import { css } from 'lit-element'

export default css`
  :host {
    display: block;
    box-sizing: border-box;
    /* border: 10px solid dodgerblue; */
  }

  system-router {
    display: flex;
    height: 100%;
    /* border: 3px dotted blue; */
    overflow: hidden;
    box-sizing: border-box;
  }
  app-shell {
    height: 100%;
    width: 100%;
  }
`
