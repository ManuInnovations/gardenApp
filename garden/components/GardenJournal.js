import h from 'react-hyperscript'
import { mapObjIndexed, values, keys, pipe, prop } from 'ramda'
import { FormattedMessage } from 'dogstack/intl'

const mapJournalEntries = mapObjIndexed((entry, key) => (
  h('p', {}, prop('entry', entry))
))
const mapJournalToValues = pipe(mapJournalEntries, values)

const GardenJournal = (props) => {
  const { garden, actions } = props

  return (
    h('div', {}, [
      h('h1', {}, [
        h(FormattedMessage, {
          id: 'journal.journal'
        })
      ]),
      h('div', {}, [
        mapJournalToValues(garden)
      ])
    ])
  )
}

export default GardenJournal
