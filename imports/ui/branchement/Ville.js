import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Ville extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleVilleClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="ville"
          id="ville"
          onClick={this.handleVilleClick.bind(this)} />
        <label htmlFor="ville">VILLE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>
            Organisé par la ville ?
            <input type="radio" name="byTheCity" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="byTheCity" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Organisé sur la ville ?
            <input type="radio" name="aboutTheCity" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="aboutTheCity" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
        </div>
      </div>
    )
  }
}

export default Ville
