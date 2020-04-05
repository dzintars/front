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

  app-taskbar {
    height: 4rem;
    border-bottom: 1px solid var(--theme-color-primary-3d, red);
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--theme-color-primary, red);
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
    fill: var(--theme-color-primary-10d);
  }
  h2 {
    margin: 0 2rem;
    color: var(--theme-color-primary-10d);
  }
`
