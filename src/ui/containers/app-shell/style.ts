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
    background-color: var(--theme-color-primary-1d);
  }
  app-home {
    flex: 1;
    background-color: var(--theme-color-primary-1d);
  }

  app-taskbar {
    min-height: var(--size-l);
    border-bottom: 0.01em solid var(--theme-color-primary-3d, red);
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--theme-color-primary);
  }
  .taskbar-middle {
    padding: 0 1rem;
  }
  app-shortcuts {
    min-width: var(--size-l);
    border-right: 0.01em solid var(--theme-color-primary-3d, red);
    background-color: var(--theme-color-primary);
  }

  action-center {
    width: 25%;
    border-left: 0.01em solid var(--theme-color-primary-3d, red);
    background-color: var(--theme-color-primary);
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--size-sl);
    width: var(--size-sl);
    /* border: 0.01em solid var(--theme-color-primary-3d, red); */
    box-sizing: border-box;
  }
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--size-m);
    min-width: var(--size-m);
    /* width: auto; */
    background-color: var(--theme-color-primary);
    /* border: 1px solid var(--theme-color-primary-10d); */
    border: none;
    outline: none;
    /* margin: 0 1rem; */
    padding: 0;

    border-radius: 2.4rem;
    color: var(--theme-color-primary-10d);
  }
  button:hover {
    background-color: var(--theme-color-primary-2d);
  }
  button:active {
    background-color: var(--theme-color-primary-2d);
  }
  svg {
    width: var(--size-s);
    height: var(--size-s);
    /* fill: var(--theme-color-primary-10d); */
    stroke: var(--theme-color-primary-10d);
    stroke-width: 0.1em;
    fill: none;
    align-items: center;
  }
  button span {
    margin: 0 0.6rem;
  }
  h2 {
    margin: 0;
    color: var(--theme-color-primary-10d);
    font-weight: 700;
  }
  ui-statusbar-connected {
    border-top: 1px solid var(--theme-color-primary-3d);
    height: calc(var(--size-m, 2.25rem) / 2);
  }
`
