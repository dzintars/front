import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    display: block;
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
  application-shortcut:hover {
    background-color: var(--theme-color-base-100);
  }
  @media only screen and (max-width: 600px) {
    :host {
      width: 95%;
    }
`
