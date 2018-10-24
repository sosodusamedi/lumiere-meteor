import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { Bulbs } from '../api/bulbs.js'
import InfoSide from '../ui/InfoSide'

class UserPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bulb: {
        name: '',
        phone: '',
        email: '',
        location: '',
        birthday: '',
        disponibilities: '',
        interests: [],
        disinterests: []
      }
    }
  }

  componentDidMount = (props) => {
    this.setState({
      bulb: {
        name: this.props.bulb.name,
        phone: this.props.bulb.phone,
        email: this.props.bulb.email,
        location: this.props.bulb.location,
        birthday: this.props.bulb.birhtday,
        disponibilities: this.props.bulb.disponibilities,
        interests: this.props.bulb.interests,
        disinterests: this.props.bulb.disinterests
      }
    })
  }

  handleClick = () => {
    console.log(this.state.bulb)
  }

  handleSecondClick = () => {
    console.log(this.props.bulb)
  }
  // interestsList() {
  //   if(!this.props.bulb.interests) return
  //   {interests.map((interest, index) =>
  //     <div key={index}>
  //       <h6>{interest.name} - {interest.preference}</h6>
  //       <p>{interest.detail}</p>
  //     </div>
  //   )}
  // }

  // removeBulb() {
  //   Meteor.call('bulbs.remove', this.props.bulb._id)
  // }

  render() {
      return (
        <div>
          <h1>Welcome on <strong>{name}</strong>'s profile</h1>
          {/* <InfoSide bulb={this.state.bulb} /> */}
          <button onClick={this.handleClick.bind(this)}>check</button>
          <button onClick={this.handleSecondClick.bind(this)}>check 2</button>
        </div>
      )
    }
}

export default withTracker(({ match }) => {
  const bulbId = match.params.id
  const load = Meteor.subscribe('bulbs')

  return {
    bulb: Bulbs.findOne(bulbId),
    ready: load.ready()
  }
})(UserPage)
