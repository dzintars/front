import { css } from 'lit-element'

export default css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* border: 5px dotted green; */
    box-sizing: border-box;
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
`
