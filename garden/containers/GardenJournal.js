import { connect } from 'feathers-action-react'

import GardenJournal from '../components/GardenJournal'

import { actions as journalActions } from '../'

import { getIndexProps } from '../getters'

export default connect({
  selector: getIndexProps,
  actions: { journal: journalActions },
  query: {
    service: 'journal',
    params: {}
  }
})(GardenJournal)
