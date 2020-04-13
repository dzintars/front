Dzintars 18 hours ago
Personally I am curious about the recipes/guidances for the all above. I am most likely wrong there, but... it seems to me that there is missing some magical glue in "vanilla" WC/LE applications. Like... you make all those nice components... you could even have some global state managements... and yet.. you need to glue those components together. (edited)

blikblum 10 hours ago
I use an extra layer to glue together the global state with the web component.
It allows to make dumb web-components that receives data and emits events. This makes easier to test the webcomponent
In my case this layer is a class instantiated by the router but can be instantiated as you like.

blikblum 10 hours ago
Below is the web component i worked on today:

```js
import { Component, html } from 'component'
import { state, Model } from 'nextbone'
import { input } from 'templates/form/input'
import { checkbox } from 'templates/form/checkbox'
import 'components/data-table'
import 'components/modal-form'
const rolesInput = form => {
  return html`
    <div class="form-group">
      <label>Funções</label>
      ${checkbox(form, 'roles.manager', 'Gerente')} ${checkbox(form, 'roles.physician', 'Médico')} ${checkbox(
        form,
        'roles.assistant',
        'Assistente'
      )}
    </div>
  `
}
const renderUserEdit = form => {
  return html`
    ${input(form, 'displayName', 'Nome')} ${rolesInput(form)}
  `
}
const renderUserRegister = form => {
  return html`
    ${input(form, 'email', 'Email', { type: 'email' })} ${rolesInput(form)}
  `
}
const roleNameMap = {
  manager: 'Gerente',
  physician: 'Médico',
  assistant: 'Assistente',
}
const renderRolesField = model => {
  const roles = model.get('roles') || {}
  return html`
    ${Object.keys(roles)
      .map(key => {
        return roles[key]
          ? html`
              <span class="badge badge-default">\${roleNameMap[key]}</span>
            `
          : false
      })
      .filter(Boolean)}
  `
}
class SettingsUsersView extends Component {
  @state
  users
  async registerUserClick() {
    const editor = document.createElement('modal-form')
    editor.model = new Model()
    editor.title = 'Registrar usuário'
    editor.formRender = renderUserRegister
    const result = await this.modals.dialog(editor, { size: 'xl', centered: true })
    if (result) {
      this.dispatchEvent(new CustomEvent('register-user', { detail: { userRegistration: result } }))
    }
  }
  async editUser(user) {
    const editor = document.createElement('modal-form')
    editor.model = user
    editor.title = 'Editar usuário'
    editor.formRender = renderUserEdit
    const result = await this.modals.dialog(editor, { size: 'xl', centered: true })
    if (result) {
      this.dispatchEvent(new CustomEvent('save-user', { detail: { user } }))
    }
  }
  async removeUser(user) {
    const result = await this.modals.confirm({
      title: 'Confirmação',
      text: 'Deseja remover este usuário?',
      centered: true,
    })
    if (result) {
      this.dispatchEvent(new CustomEvent('remove-user', { detail: { user } }))
    }
  }
  render() {
    return html`
      <div class="card">
        <div class="card-header">
          <div class="row align-items-center">
            <div class="col"><h3>Usuários</h3></div>
            <div class="col text-right">
              <button type="button" class="btn btn-primary" @click=${this.registerUserClick}>Adicionar</button>
            </div>
          </div>
        </div>
        <data-table
          thead-light
          .fields=${[
            { title: 'Nome', attr: 'displayName', styles: { width: '30%' } },
            { title: 'Email', attr: 'email', styles: { width: '30%' } },
            { title: 'Funções', render: renderRolesField, styles: { width: '20%' } },
            {
              render: model => html`
                <button type="button" class="btn btn-primary btn-sm" @click=${() => this.editUser(model)}>
                  Editar
                </button>
                <button type="button" class="btn btn-danger btn-sm" @click=${() => this.removeUser(model)}>
                  Excluir
                </button>
              `,
              styles: { width: '1%' },
            },
          ]}
          .collection=${this.users}
        ></data-table>
      </div>
    `
  }
}
customElements.define('settings-users-view', SettingsUsersView)
export { SettingsUsersView }
```

blikblum 10 hours ago
The route class

```js
import { Route, property, elEvent } from 'nextbone-routing'
import { inject } from 'next-service'
import './settings-users-view'
class SettingsUsersRoute extends Route {
  static component = 'settings-users-view'
  @inject('usersStore')
  @property({ to: 'users' })
  users
  @inject('modalsService')
  @property({ to: 'modals' })
  modals
  @elEvent('register-user')
  registerUser(e) {
    this.users.registerUser(e.detail.userRegistration)
  }
  @elEvent('remove-user')
  removeUser(e) {
    this.users.removeUser(e.detail.user)
  }
  @elEvent('save-user')
  removeUser(e) {
    e.detail.user.save()
  }
}
export { SettingsUsersRoute }
```

blikblum 10 hours ago
The store

```js
import \* as firebase from 'firebase/app'
import { service, inject } from 'next-service'
import { FireCollection } from 'nextbone-firestore'
import { User } from 'entities/user'
const db = firebase.firestore()
const functions = firebase.functions()
const registerUser = functions.httpsCallable('registerUser')
const removeUser = functions.httpsCallable('removeUser')
@service('usersStore')
class UsersStore extends FireCollection {
static model = User
@inject('sessionService')
session
ref() {
const customerId = this.session.get('customerId')
if (customerId) {
return db
.collection('customers')
.doc(customerId)
.collection('users')
}
}
registerUser(userRegistration) {
return registerUser(userRegistration.toJSON())
}
removeUser(user) {
return removeUser(user.toJSON())
}
}
```

blikblum 10 hours ago
The users-view receive a users collection and a modals service. Those are the only requirement. i does not know nothing about from where the data is coming, allowing to easily mock the data. Also does not calls the side effect code just emits a set of events
In the app the data comes from firebase. To test i need just to pass some dumb data. Like below (storybook)

```js
import { html } from 'lit-html'
import { Collection } from 'nextbone'
import '../../src/application/settings/users/settings-users-view'
export default {
  title: 'Views/Settings/Users',
}
const usersData = [
  {
    id: 1,
    displayName: 'Claiborn Slainey',
    email: 'cslainey0@house.gov',
    roles: {
      assistant: true,
    },
  },
  {
    id: 2,
    displayName: 'Coralyn Radleigh',
    email: 'cradleigh1@opera.com',
  },
  {
    id: 3,
    displayName: 'Ingaberg Ouldcott',
    email: 'iouldcott2@ycombinator.com',
    roles: {
      physician: true,
    },
  },
  {
    id: 4,
    displayName: 'Daisey Cuckoo',
    email: 'dcuckoo3@fda.gov',
    roles: {
      physician: false,
    },
  },
  {
    id: 5,
    displayName: 'Pietra Eyton',
    email: 'peyton4@admin.ch',
  },
  {
    id: 6,
    displayName: 'Morgan McNern',
    email: 'mmcnern5@pbs.org',
    roles: {
      manager: true,
      physician: true,
      assistant: true,
    },
  },
  {
    id: 7,
    displayName: 'Lauree Laurens',
    email: 'llaurens6@examiner.com',
    roles: {
      manager: false,
      physician: false,
    },
  },
  {
    id: 8,
    displayName: 'Colver Rebeiro',
    email: 'crebeiro7@last.fm',
    roles: {
      assistant: false,
    },
  },
  {
    id: 9,
    displayName: 'Olag Warne',
    email: 'owarne8@t-online.de',
    roles: {
      manager: true,
      assistant: true,
      physician: false,
    },
  },
  {
    id: 10,
    displayName: 'Sarina Cantwell',
    email: 'scantwell9@uol.com.br',
    roles: {
      physician: true,
    },
  },
  {
    id: 11,
    displayName: 'June De Hoogh',
    email: 'jdea@geocities.com',
    roles: {
      manager: true,
      assistant: true,
      physician: false,
    },
  },
  {
    id: 12,
    displayName: 'Hashim Sayse',
    email: 'hsayseb@sciencedirect.com',
    roles: {
      physician: false,
    },
  },
  {
    id: 13,
    displayName: 'Tracey Churchward',
    email: 'tchurchwardc@alexa.com',
    roles: {
      assistant: false,
    },
  },
  {
    id: 14,
    displayName: 'Tiebout Skeermer',
    email: 'tskeermerd@hp.com',
    roles: {
      physician: false,
    },
  },
  {
    id: 15,
    displayName: 'Hagen Farnorth',
    email: 'hfarnorthe@amazon.co.jp',
    roles: {
      manager: true,
      assistant: false,
      physician: true,
    },
  },
]
const createUsersMock = props => {
  const usersMock = new Collection(usersData)
  if (props) {
    Object.assign(usersMock, props)
  }
  return usersMock
}
export const DataLoaded = () =>
  html`
    <settings-users-view .users=${createUsersMock()}></settings-users-view>
  `
export const DataLoading = () => {
  return html`
    <settings-users-view .users=${createUsersMock({ isLoading: true })}></settings-users-view>
  `
}
```

Dzintars 3 minutes ago
Thank you @blikblum. Really great examples! Can't comment on it, but seems great practices are implemented. Copied them locally to explore in depth.
