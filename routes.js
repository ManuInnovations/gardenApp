import { Route } from 'react-router-dom'
import React from 'react'

// Top Level Containers
import Home from './app/containers/Home'
import DogsContainer from './dogs/containers/Dogs'
import DogContainer from './dogs/containers/Dog'

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
  }
]
