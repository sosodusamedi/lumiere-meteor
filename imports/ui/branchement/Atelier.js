import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Atelier extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleAtelierClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div onClick={this.handleAtelierClick.bind(this)}>
        <input
          type="checkbox"
          name="atelier"
          id="atelier" />
        <label htmlFor="atelier">ATELIER</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <input
            type="checkbox"
            name="cuisine"
            id="cuisine" />
          <label htmlFor="cuisine">cuisine</label><br />
          <input
            type="checkbox"
            name="DIY"
            id="DIY" />
          <label htmlFor="DIY">DIY</label><br />
          <input
            type="checkbox"
            name="signLanguage"
            id="signLanguage" />
          <label htmlFor="signLanguage">language des signes</label><br />
          <input
            type="checkbox"
            name="language"
            id="language" />
          <label htmlFor="language">language</label><br />
          <input
            type="checkbox"
            name="handcraft"
            id="handcraft" />
          <label htmlFor="handcraft">manuel</label><br />
        </div>
      </div>
    )
  }
}

export default Atelier
