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
      ${checkbox(form, 'roles.manager', 'Gerente')} ${checkbox(form, 'roles.physician', 'Médico')}
      ${checkbox(form, 'roles.assistant', 'Assistente')}
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
              <span class="badge badge-default">${roleNameMap[key]}</span>
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
            <div class="col">
              <h3>Usuários</h3>
            </div>
            <div class="col text-right">
              <button type="button" class="btn btn-primary" @click=${this.registerUserClick}>
                Adicionar
              </button>
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
              render: model =>
                html`
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
