import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Concert extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleConcertClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="concert"
          id="concert"
          onClick={this.handleConcertClick.bind(this)}/>
        <label htmlFor="concert">CONCERT</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Artiste en particulier ?</p>
          <input type="text" ref="artist" /> <br />
        </div>
      </div>
    )
  }
}

export default Concert
