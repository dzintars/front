export type AppModule = Readonly<{
  id: string
  title: string
  permalink: string
}>

export type AppModules = Readonly<{
  entities: { [id: string]: AppModule }
  ids: string[]
}>

export type AppNavigationState = Readonly<{
  entities: { [id: string]: AppModule }
  ids: string[]
  fetching: boolean
  selected: string
  applicationId: string
  error: Error
}>
