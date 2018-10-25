import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Soiree extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleSoireeClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="soiree"
          id="soiree"
          onClick={this.handleSoireeClick.bind(this)} />
        <label htmlFor="soiree">SOIREE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>
            Boîte ?
            <input type="radio" name="club" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="club" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>Quel type de musique ?</p>
          <input type="text" ref="musicType" /> <br />
          <p>Soirée en particulier ?</p>
          <input type="text" ref="themeParty" /> <br />
        </div>
      </div>
    )
  }
}

export default Soiree
