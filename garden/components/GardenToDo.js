import h from 'react-hyperscript'
import { FormattedMessage } from 'dogstack/intl'
import { compose } from 'recompose'
import { connect as connectStyles } from 'react-fela'

import styles from '../styles/GardenToDo'

const GardenToDo = (props) => {
  const { styles } = props

  return (
    h('div', {
      className: styles.container
    }, [
      h('h1', {}, [
        h(FormattedMessage, {
          id: 'garden.toDoList'
        })
      ])
    ])
  )
}

export default compose(
  connectStyles(styles)
)(GardenToDo)
