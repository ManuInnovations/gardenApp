import createModule from 'feathers-action'

const module = createModule('journal')

export const actions = module.actions
export const updater = module.updater
export const epic = module.epic
