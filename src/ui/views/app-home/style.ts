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
    display: flex;
    flex-direction: row;
  }

  .logo {
    height: var(--size-sl);
    margin: 0 2rem;
  }

  .logo svg {
    height: var(--size-sl);
    width: auto;
    border: none;
  }

  ul {
    text-align: center;
  }
  ul li {
    display: inline-block;
    margin-right: 0.5rem;
  }

  .btn {
    height: var(--size-s);
    width: var(--size-s);
    margin: 0 2rem;
    padding: 0;
    /* color: var(--color-dodgerblue-main); */
    background-color: unset;
    border-radius: 50%;
    border: none;
    box-shadow: var(--shadow-8);
    outline: unset;
  }
  .btn svg {
    width: 100%;
    height: 100%;
    border: none;
  }
  .btn svg .main {
    stroke: var(--color-gray-100);
    fill: var(--color-gray-100);
  }
  .btn:hover svg .main {
    stroke: var(--color-dodgerblue-main);
    fill: var(--color-dodgerblue-main);
  }

  .btn:hover {
    box-shadow: var(--shadow-16);
  }

  main {
    padding: 0 4rem;
  }

  overlay-agent {
    height: 100%;
    width: 100%;
    position: absolute;
  }
`
