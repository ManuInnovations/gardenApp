import h from 'react-hyperscript'
import React from 'react'

import GardenJournal from './GardenJournal'
import GardenToDo from './GardenToDo'

const GardenProfile = (props) => {
  return (
    <div>
      <GardenJournal />
      <GardenToDo />
    </div>
  )
}

export default GardenProfile
