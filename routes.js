import { Route } from 'react-router-dom'
import React from 'react'

// Top Level Containers
import Home from './app/containers/Home'
import DogsContainer from './dogs/containers/Dogs'
import Garden from './garden/containers/Garden'
import GardenJournal from './garden/components/GardenJournal'

export default [
  {
    name: 'home',
    path: '/',
    exact: true,
    Component: Home,
    navigation: {
      title: 'app.home',
      icon: 'fa fa-home'
    }
  },
  {
    name: 'dogs',
    path: '/',
    exact: true,
    Component: (DogsContainer),
    navigation: {
      title: 'dogs.dogs',
      icon: 'fa fa-paw'
    }
  },
  {
    name: 'garden',
    path: '/garden',
    exact: true,
    Component: Garden,
    navigation: {
      title: 'garden.garden',
      icon: 'fa fa-leaf'
    }
  },
  {
    name: 'gardenJournal',
    path: '/journal',
    exact: true,
    Component: GardenJournal,
    navigation: {
      title: 'journal.myJournal',
      icon: 'fa fa-leaf'
    }
  }
]
