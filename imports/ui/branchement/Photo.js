import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Photo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handlePhotoClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="photo"
          id="photo"
          onClick={this.handlePhotoClick.bind(this)} />
        <label htmlFor="photo">PHOTO</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <input
            type="checkbox"
            name="photoRoute"
            id="photoRoute" />
          <label htmlFor="photoRoute">parcours photo</label><br />
          <input
            type="checkbox"
            name="groups"
            id="groups" />
          <label htmlFor="groups">groupescours</label><br />
          <input
            type="checkbox"
            name="cours"
            id="cours" />
          <label htmlFor="cours">cours</label><br />
        </div>
      </div>
    )
  }
}

export default Photo
