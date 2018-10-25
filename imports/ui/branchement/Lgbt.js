import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Lgbt extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  // handleLgbtClick = () => {
  //   this.setState({
  //     hideUnchecked: !this.state.hideUnchecked
  //   })
  // }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="lgbt"
          id="lgbt" />
        <label htmlFor="lgbt">LGBT</label><br />
      </div>
    )
  }
}

export default Lgbt
