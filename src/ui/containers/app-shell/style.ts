import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    --size-l: var(--theme-size-l);
    --color-base: var(--theme-color-base);
    display: flex;
    flex-direction: column;
    background: var(--color-base);
    /* border: 5px dotted green; */
  }
  main {
    display: flex;
    flex-direction: row;
    flex: 1;
    background-color: var(--theme-color-primary-1d);
    /* height: 100%; */
  }
  app-home {
    flex: 1;
    background-color: var(--theme-color-primary-1d);
    /* height: 100%; */
  }
  app-taskbar {
    height: var(--size-l);
    min-height: var(--size-l);
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--color-base);
    border-bottom: 0.01em solid var(--theme-color-primary-3d);
  }
  .taskbar-middle {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
    min-height: 100%;
  }
  .taskbar-middle div {
    display: flex;
    box-sizing: border-box;
    /* TODO: Remove this. Should inherit. */
    height: var(--size-l);
    align-items: center;
  }
  .taskbar-middle .left {
    /* border: 1px solid green; */
    /* height: 100%; */
  }
  .taskbar-middle .mid {
    flex: 1;
    justify-content: center;
    /* border: 1px solid red; */
  }
  .taskbar-middle .right {
  }
  app-shortcuts {
    width: var(--size-l);
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
    height: var(--size-l);
    width: var(--size-l);
    /* border: 0.01em solid var(--theme-color-primary-3d, red); */
    box-sizing: border-box;
  }
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--theme-size-m);
    min-width: var(--theme-size-m);
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
    width: var(--theme-icon-size-m);
    height: var(--theme-icon-size-m);
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
  .fieldset {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--size-l);
    width: 50%;
  }
  .fieldset input {
    height: 2rem;
    width: 100%;
    border-radius: 3px;
    background: var(--theme-color-primary-1d);
    border: 1px solid var(--theme-color-primary-2d);
    padding: 0 6px;
    outline: none;
    box-sizing: border-box;
  }
  .fieldset input:focus {
    border: 1px solid var(--lt-color-primary, hsl(215 100% 50%));
  }
`
