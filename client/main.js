import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import Routes from '../imports/startup/Routes'

Meteor.startup(() => {
  console.log("CLIENT : INIT")
  render(
    <Routes />, document.getElementById('root')
  )
})
