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
  /* h1 {
    border: 10px dotted red;
  }
  view-user-detail {
    border: 2px solid black;
  } */
  /* view-user-list {
    flex: 1;
    height: 100px;
    min-height: 100%;
    min-height: min-content;
    width: 100%;
    border: 5px dotted green;
  } */
  app-router {
    display: flex;
    height: 100%;
    box-sizing: border-box;
    border: 3px dotted red;
    overflow: hidden;
  }
`
