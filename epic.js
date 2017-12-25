import { combineEpics } from 'redux-observable'

import { epic as agents } from 'dogstack-agents'
import { epic as dogs } from './dogs'
import { epic as garden } from './garden'

export default combineEpics(
  agents,
  dogs,
  garden
)
