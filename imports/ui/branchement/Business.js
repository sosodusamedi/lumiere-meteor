import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Business extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleBusinessClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="business"
          id="business"
          onClick={this.handleBusinessClick.bind(this)}/>
        <label htmlFor="business">BUSINESS</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <input
            type="checkbox"
            name="afterwork"
            id="afterwork" />
          <label htmlFor="afterwork">afterwork</label><br />
          <input
            type="checkbox"
            name="conference"
            id="conference" />
          <label htmlFor="conference">conférence</label><br />
          <input
            type="checkbox"
            name="htmlFormation"
            id="htmlFormation" />
          <label htmlFor="htmlFormation">htmlFormation</label><br />
          <input
            type="checkbox"
            name="networking"
            id="networking" />
          <label htmlFor="networking">réseautage</label><br />
        </div>
      </div>
    )
  }
}

export default Business
