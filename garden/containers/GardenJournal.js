import { connect } from 'feathers-action-react'

import GardenJournal from '../components/GardenJournal'

import { actions as gardenActions } from '../'

import { getIndexProps } from '../getters'

export default connect({
  selector: getIndexProps,
  actions: { journal: gardenActions },
  query: {
    service: 'journal',
    params: {}
  }
})(GardenJournal)
