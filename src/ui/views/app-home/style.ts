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
    /* border: 10px solid pink; */
    /* overflow: hidden; */
    background: var(--theme-color-primary);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  leaflet-map {
    width: 100%;
    height: 100%;
    padding: 4px;
  }
`
