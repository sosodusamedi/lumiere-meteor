import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Theatre extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleTheatreClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="theatre"
          id="theatre"
          onClick={this.handleTheatreClick.bind(this)} />
        <label htmlFor="theatre">THEATRE / SPECTACLE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Quel genre ?</p>
          <input type="text" ref="theatreType" /> <br />
          <p>
            Opéra / Orchestre ?
            <input type="radio" name="opera" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="opera" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
        </div>
      </div>
    )
  }
}

export default Theatre
