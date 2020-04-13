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
export const DataLoaded = () => html`
  <settings-users-view .users=${createUsersMock()}></settings-users-view>
`
export const DataLoading = () => {
  return html`
    <settings-users-view .users=${createUsersMock({ isLoading: true })}></settings-users-view>
  `
}
