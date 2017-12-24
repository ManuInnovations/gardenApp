import h from 'react-hyperscript'
import React from 'react'

import GardenJournal from '../components/GardenJournal'
import GardenToDo from '../components/GardenToDo'

const Garden = (props) => {
  return (
    <div>
      <GardenJournal />
      <GardenToDo />
    </div>
  )
}

export default Garden
