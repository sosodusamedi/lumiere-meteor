import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Salon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleSalonClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="salon"
          id="salon"
          onClick={this.handleSalonClick.bind(this)} />
        <label htmlFor="salon">SALON</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Quel sujet ?</p>
          <input type="text" ref="fairType"/>
        </div>
      </div>
    )
  }
}

export default Salon
