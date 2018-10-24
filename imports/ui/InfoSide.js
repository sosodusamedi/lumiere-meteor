import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { Bulbs } from '../api/bulbs.js'
import InfoSideInfos from './InfoSideInfos'
import InfoSideInterests from './InfoSideInterests'

class InfoSide extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.ready) {
      return <div>Loading...</div>
    } else {
      const {
        name,
        phone,
        email,
        location,
        birthday,
        disponibilities,
        interests,
        disinterests
      } = this.props.bulb
      return (
        <div>
          <InfoSideInfos />
          <InfoSideInterests />
        </div>
      )
    }
  }
}

export default withTracker(({ match }) => {
  const bulbId = match.params.id
  const load = Meteor.subscribe('bulbs')

  return {
    bulb: Bulbs.findOne(bulbId),
    ready: load.ready()
  }
})(InfoSide)
