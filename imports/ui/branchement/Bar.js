import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Bar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleBarClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="bar"
          id="bar"
          onClick={this.handleBarClick.bind(this)} />
        <label htmlFor="bar">BAR</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Quel type de bar ?</p>
          <input type="text" ref="barType" /> <br />
          <input
            type="checkbox"
            name="concert"
            id="concert" />
          <label htmlFor="concert">concert-live</label><br />
          <input
            type="checkbox"
            name="quiz"
            id="quiz" />
          <label htmlFor="quiz">quiz</label><br />
          <input
            type="checkbox"
            name="blindtest"
            id="blindtest" />
          <label htmlFor="blindtest">blindtest</label><br />
          <input
            type="checkbox"
            name="karaoke"
            id="karaoke" />
          <label htmlFor="karaoke">karaoke</label><br />
          <input
            type="checkbox"
            name="beerpong"
            id="beerpong" />
          <label htmlFor="beerpong">beerpong</label><br />
          <p>
            Promo / Offre spéciale ?
            <input type="radio" name="promo" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="promo" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
        </div>
      </div>
    )
  }
}

export default Bar
