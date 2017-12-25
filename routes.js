import { Route } from 'react-router-dom'
import React from 'react'

// Top Level Containers
import Home from './app/containers/Home'
// import Garden from './garden/containers/GardenJournal'
import Profile from './garden/components/GardenProfile'
import Journal from './garden/components/GardenJournal'

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
    name: 'garden',
    path: '/profile',
    exact: true,
    Component: Profile,
    navigation: {
      title: 'garden.profile',
      icon: 'fa fa-leaf'
    }
  },
  {
    name: 'gardenJournal',
    path: '/journal',
    exact: true,
    Component: Journal,
    navigation: {
      title: 'journal.myJournal',
      icon: 'fa fa-leaf'
    }
  }
]
