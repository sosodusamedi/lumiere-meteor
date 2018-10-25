import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Bouffe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleBouffeClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="bouffe"
          id="bouffe"
          onClick={this.handleBouffeClick.bind(this)}/>
        <label htmlFor="bouffe">BOUFFE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Quel type de cuisine ?</p>
          <input type="text" ref="cuisineType" /> <br />
          <input
            type="checkbox"
            name="foodSpecial"
            id="foodSpecial" />
          <label htmlFor="foodSpecial">soirée spéciale</label><br />
          <input
            type="checkbox"
            name="openings"
            id="openings" />
          <label htmlFor="openings">openings</label><br />
          <input
            type="checkbox"
            name="shortTime"
            id="shortTime" />
          <label htmlFor="shortTime">éphémère</label><br />
          <input
            type="checkbox"
            name="foodtruck"
            id="foodtruck" />
          <label htmlFor="foodtruck">foodtruck</label><br />
        </div>
      </div>
    )
  }
}

export default Bouffe
