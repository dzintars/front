import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    display: flex;
    flex-direction: column;
    /* border: 5px dotted green; */
  }
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
    height: 2rem;
    border-bottom: 1px solid var(--theme-color-primary-3d);
    color: var(--theme-color-primary-10d);
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  nav {
    width: 2rem;
    border-right: 1px solid var(--theme-color-primary-3d);
  }
  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 2rem;
    border-top: 1px solid var(--theme-color-primary-3d);
    color: var(--theme-color-primary-10d);
  }

  footer p {
    margin: 0;
    padding: 0;
  }
`
