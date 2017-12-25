import { createStructuredSelector } from 'reselect'

export const getJournal = (state) => state.journal

export const getIndexProps = createStructuredSelector({
  journal: getJournal
})
