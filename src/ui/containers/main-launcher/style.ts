import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    display: block;
    /* --size-l: var(--theme-size-l);
    --shadow-64: var(--theme-shadow-64);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: var(--theme-size-l);
    left: 1rem;
    background-color: var(--theme-color-base-110);
    box-shadow: var(--shadow-64);
    box-sizing: border-box;
    height: calc(100% - var(--theme-size-l) - 1rem);
    width: 600px; */
  }

  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  application-shortcut {
    margin: 1rem;
    width: 200px;
  }
  @media only screen and (max-width: 600px) {
    :host {
      width: 95%;
    }
`
