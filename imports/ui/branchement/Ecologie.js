import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Ecologie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleEcologieClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="ecologie"
          id="ecologie"
          onClick={this.handleEcologieClick.bind(this)} />
        <label htmlFor="ecologie">ECOLOGIE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <input
            type="checkbox"
            name="actionsEco"
            id="actionsEco" />
          <label htmlFor="actionsEco">actions</label><br />
          <input
            type="checkbox"
            name="inhtmlFormationsEco"
            id="inhtmlFormationsEco" />
          <label htmlFor="inhtmlFormationsEco">inhtmlFormations</label><br />
        </div>
      </div>
    )
  }
}

export default Ecologie
