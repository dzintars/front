import {
  LitElement,
  customElement,
  html,
  property,
  css,
  TemplateResult,
  CSSResult,
} from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { connect } from '@captaincodeman/redux-connect-element';
import {
  store,
  RootState,
  User,
  UserSelectors,
  UserActions,
} from '../../../store';
import '../../components/my-component';

@customElement('view-user-list')
export class UserListElement extends connect(store, LitElement) {
  @property({ type: Array }) users: User[];
  @property({ type: Number }) selected: number;

  mapState(state: RootState) {
    return {
      users: UserSelectors.users(state),
      selected: UserSelectors.selected(state),
    };
  }

  mapEvents() {
    return {
      'my-component-click': (e: CustomEvent) =>
        UserActions.selectUser(e.detail.key),
      // 'my-component-updated': (e: CustomEvent) =>
      //   UserActions.updateUser(e.detail),
      // 'my-component-delete': (e: CustomEvent) =>
      //   UserActions.deleteUser(e.detail.key),
    };
  }

  render(): TemplateResult {
    return html`
      ${repeat(
        this.users,
        user => user.id,
        user => html`
          <my-component
            .key=${user.id}
            .name=${user.name}
            .selected=${user.id === this.selected}
          ></my-component>
        `
      )}
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
      }

      my-component {
        margin: 8px;
      }
    `;
  }
}
