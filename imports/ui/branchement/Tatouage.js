import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Tatouage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleTatouageClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="tatouage"
          id="tatouage"
          onClick={this.handleTatouageClick.bind(this)} />
        <label htmlFor="tatouage">TATOUAGE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <input
            type="checkbox"
            name="flashDay"
            id="flashDay" />
          <label htmlFor="flashDay">flash</label><br />
          <input
            type="checkbox"
            name="salon"
            id="salon" />
          <label htmlFor="salon">salon</label><br />
        </div>
      </div>
    )
  }
}

export default Tatouage
