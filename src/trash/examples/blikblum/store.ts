import * as firebase from 'firebase/app'
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
