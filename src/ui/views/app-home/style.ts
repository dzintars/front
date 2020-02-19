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
  main-taskbar {
    height: var(--size-sl, 48px);
    min-height: var(--size-sl, 48px);
    z-index: 1;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: var(--size-xxl);
    box-sizing: border-box;
    /* border: 1px solid dodgerblue; */
  }

  .main-area {
    flex: 1;
    justify-content: flex-start;
  }

  /* button {
    height: var(--size-s);
    font-family: var(--font-main);
    font-size: 1rem;
    background-color: var(--color-dodgerblue-main);
    color: var(--color-dodgerblue-10l);
    border: none;
    border-radius: 2px;
    margin: 0 2rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: var(--shadow-8);
    outline: unset;
  } */

  .logo {
    height: var(--size-sl);
    margin: 0 2rem;
  }

  .logo svg {
    height: var(--size-sl);
    width: auto;
    border: none;
  }

  .btn {
    height: var(--size-s);
    width: var(--size-s);
    margin: 0 2rem;
    padding: 0;
    color: black;
    background-color: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 50%;
    border: none;
    box-shadow: var(--shadow-8);
    outline: unset;
  }
  svg {
    width: 100%;
    height: 100%;
    border: none;
  }
  svg .primary {
    stroke: red;
    fill: black;
  }
  button:hover {
    box-shadow: var(--shadow-16);
  }
`
