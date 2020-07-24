import { LitElement, customElement, html, property, css } from 'lit-element'
import { connect } from '@captaincodeman/redux-connect-element'
import { store, RootState, User, UserSelectors } from '../store'

@customElement('hygen-test')
export class HygenTestElement extends connect(store, LitElement) {
  @property({ type: Object })
  user: User

  mapState(state: RootState) {
    return {
      user: UserSelectors.user(state),
    }
  }

  render() {
    const u = this.user

    return html`
      <div>Hello ${u.name} and greetings from &lt;hygen-test&gt;!</div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `
  }
}
