import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { Bulbs } from '../api/bulbs.js'
import InterestsList from '../ui/InterestsList'
import DisInterestsList from '../ui/DisInterestsList'

class InfoSideInterests extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.ready) {
      return <div>Loading...</div>
    } else {
      const {
        interests,
        disinterests
      } = this.props.bulb
      return (
        <div>
          <legend>Centres d'intérêts :</legend>
          <div>
            <InterestsList interests={this.props.interests} />
          </div>
          <legend>N'aime pas :</legend>
          <div>
            <DisInterestsList disinterests={this.props.disinterests} />
          </div>
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
})(InfoSideInterests)
