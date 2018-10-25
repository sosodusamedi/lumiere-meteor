import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Conference extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleConferenceClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="conference"
          id="conference"
          onClick={this.handleConferenceClick.bind(this)} />
        <label htmlFor="conference">CONFERENCE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Sujet ?</p>
          <input type="text" ref="conferenceType" /> <br />
          <p>
            Débat ?
            <input type="radio" name="debate" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="debate" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Lectures ?
            <input type="radio" name="lectures" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="lectures" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
        </div>
      </div>
    )
  }
}

export default Conference
