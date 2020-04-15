import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }

  :host {
    --color-base: var(--theme-color-base);
    --color-accent: var(--theme-color-accent);
    height: 100%;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    /* background: var(--theme-color-primary); */
  }
  ui-toolbar {
    border-bottom: 0.01em solid var(--theme-color-primary-3d);
    /* background-color: var(--color-base); */
    /* --color-base: var(--color-base); */
    height: 3rem;
  }
  button {
    border: none;
    background-color: var(--color-accent);
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .container {
    flex: 1;
    margin: 4px;
    box-sizing: border-box;
  }
  .container.left {
    display: flex;
    flex-direction: column;
    margin-right: 0;
  }
  .container.left .projects {
    flex: 1;
    margin-bottom: 4px;
    border: 0.01em solid var(--theme-color-primary-3d, red);
  }
  .container.left .orders {
    flex: 2;
    border: 0.01em solid var(--theme-color-primary-3d, red);
  }
  .container.right {
    border: 0.01em solid var(--theme-color-primary-3d, red);
  }
  leaflet-map {
    width: 100%;
    height: 100%;
  }
`
