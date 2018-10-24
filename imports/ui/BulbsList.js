import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { Bulbs } from '../api/bulbs.js'

const BulbsList = props => (
  <div>
    {props.bulbs.map(bulb =>
        <div key={bulb._id}>
          <Link to={`/user/${bulb._id}`} >
            {bulb.name} - <small>{bulb.disponibilities}</small>
          </Link>
        </div>
      )
    }
  </div>
)


export default withTracker(() => {
  Meteor.subscribe('bulbs')

  return {
    bulbs: Bulbs.find({}).fetch()
  }
})(BulbsList)
