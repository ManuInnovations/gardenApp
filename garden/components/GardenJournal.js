import h from 'react-hyperscript'
import { mapObjIndexed, values, keys, pipe, prop } from 'ramda'
import { FormattedMessage } from 'dogstack/intl'
import { connect as connectStyles } from 'react-fela'
import { compose } from 'recompose'
import React from 'react'

import styles from '../styles/GardenJournal'

const mapJournalEntries = mapObjIndexed((entry, key) => (
 h('p', {}, prop('entry', entry))
))

const mapJournalToValues = pipe(mapJournalEntries, values)

const GardenJournal = (props) => {
  const { journal, styles } = props
  return (
    h('div', {}, [
      h('div', {}, [
        mapJournalToValues(journal)
      ]),
      h('button', {
        onClick: createJournalEntry
      }, [
        h(FormattedMessage, {
          id: 'journal.newEntry'
        })
      ]
      )
    ])
  )
  function createJournalEntry (){
    console.log('heelo')
  }
}

export default compose(
  connectStyles(styles)
)(GardenJournal)
