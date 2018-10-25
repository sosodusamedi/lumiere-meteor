import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Etranger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleEtrangerClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="etranger"
          id="etranger"
          onClick={this.handleEtrangerClick.bind(this)} />
        <label htmlFor="etranger">ETRANGER</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Ville / Pays en particulier ?</p>
          <input type="text" ref="particularPlaceInput"/>
          <input
            type="checkbox"
            name="multilanguage"
            id="multilanguage" />
          <label htmlFor="multilanguage">soirée multilingue</label><br />
          <input
            type="checkbox"
            name="expats"
            id="expats" />
          <label htmlFor="expats">expats/rencontres</label><br />
        </div>
      </div>
    )
  }
}

export default Etranger
