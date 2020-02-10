import { css } from 'lit-element'

export default css`
  :host {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--color-gray-60);
    border-bottom: 1px solid var(--color-gray-70);
    color: var(--color-gainsboro-8l);
    margin: 0;
    box-shadow: var(--shadow-8);
  }
  a {
    color: var(--color-gray-210);
    padding-left: 10px;
  }
  p {
    margin: 0;
  }
`
