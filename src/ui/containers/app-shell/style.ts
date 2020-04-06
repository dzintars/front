import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    display: flex;
    flex-direction: column;
    background: var(--theme-color-primary);
    /* border: 5px dotted green; */
  }
  main {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  app-home {
    flex: 1;
  }

  app-taskbar {
    height: 4rem;
    border-bottom: 0.01em solid var(--theme-color-primary-3d, red);
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--theme-color-primary, red);
  }

  action-center {
    width: 20%;
    border-left: 0.01em solid var(--theme-color-primary-3d, red);
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--size-sl);
    width: var(--size-sl);
    background-color: var(--theme-color-primary-1d);
    border: 1px solid var(--theme-color-primary-2d);
    outline: none;
    color: var(--theme-color-primary-10d);
    margin: 0 1rem;
  }
  button:hover {
    background-color: var(--theme-color-primary-3d);
  }
  button:active {
    background-color: var(--theme-color-primary-4d);
  }
  svg {
    width: 2rem;
    height: 2rem;
    /* fill: var(--theme-color-primary-10d); */
    stroke: var(--theme-color-primary-10d);
  }
  h2 {
    margin: 0;
    color: var(--theme-color-primary-10d);
  }
`
