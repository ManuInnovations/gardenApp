import { concat, updateStateAt } from 'redux-fp'
import { routerReducer } from 'react-router-redux'

import { updater as agents } from 'dogstack-agents'
import { updater as dogs } from './dogs'
import { updater as garden } from './garden'

const router = updateStateAt('router', reducerToUpdater(routerReducer))

export default concat(
  agents,
  dogs,
  garden,
  router
)

function reducerToUpdater (reducer) {
  return action => state => reducer(state, action)
}
