import h from 'react-hyperscript'
import { mapObjIndexed, values, keys, pipe, prop } from 'ramda'
import { FormattedMessage } from 'dogstack/intl'
import { connect as connectStyles } from 'react-fela'
import { compose } from 'recompose'

import styles from '../styles/GardenJournal'

const mapJournalEntries = mapObjIndexed((entry, key) => (
  h('p', {}, prop('entry', entry))
))
const mapJournalToValues = pipe(mapJournalEntries, values)

const GardenJournal = (props) => {
  const { garden, styles } = props

  return (
    h('div', {
      className: styles.container
    }), [
      h('h1', {}, [
        h(FormattedMessage, {
          id: 'journal.myJournal'
        })
      ]),
      h('div', {}, [
        mapJournalToValues(garden)
      ]),
      h('button', {
        onClick: createEntry
      },
    ])
  )
)}

export default compose(
  connectStyles(styles)
)(GardenJournal)
