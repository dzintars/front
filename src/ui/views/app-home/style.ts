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
    /* background: var(--color-gainsboro-10l); */
  }

  app-taskbar {
    height: 4rem;
    border-bottom: 1px solid dodgerblue;
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
    background-color: var(--color-gray-60);
    border: 1px solid var(--color-gray-80);
    outline: none;
  }
  button:hover {
    background-color: var(--color-gray-70);
  }
  button:active {
    background-color: var(--color-gray-80);
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
`
