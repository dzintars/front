// import { Application } from './models'

const URL = `http://localhost:3002/applications`

function* fetchApplications() {
  const response = yield fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  console.log(response)
  const applications = yield response.status === 200 ? response.json() : []
  console.log(applications)
  return applications
}

// const fetchApplications = async page => {
//   const response = await fetch(`${URL}`)
//   const data = await response.json()
//   if (response.status >= 400) {
//     throw new Error(data)
//   }
//   console.log(data)
//   return data.applications.reduce((apps: Application[], app: Application) => {
//     apps[app.uuid] = app
//     console.log(apps)
//     return apps
//   }, {})
// }

export const Api = {
  fetchApplications,
}
