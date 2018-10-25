import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Sport extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleSportClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="sport"
          id="sport"
          onClick={this.handleSportClick.bind(this)} />
        <label htmlFor="sport">SPORT</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <input
            type="checkbox"
            name="sportEvent"
            id="sportEvent" />
          <label htmlFor="sportEvent">événement sportif</label><br />
          <input
            type="checkbox"
            name="match"
            id="match" />
          <label htmlFor="match">match</label><br />
          <input
            type="checkbox"
            name="matchBroadcast"
            id="matchBroadcast" />
          <label htmlFor="matchBroadcast">retansmission match</label><br />
          <input
            type="checkbox"
            name="groups"
            id="groups" />
          <label htmlFor="groups">groupes (de courses,....)</label><br />
        </div>
      </div>
    )
  }
}

export default Sport
