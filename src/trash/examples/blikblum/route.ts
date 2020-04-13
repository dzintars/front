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
