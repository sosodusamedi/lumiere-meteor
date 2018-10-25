import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Danse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleDanseClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="danse"
          id="danse"
          onClick={this.handleDanseClick.bind(this)} />
        <label htmlFor="danse">DANSE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Quel type de danse ?</p>
          <input type="text" ref="danceType" /> <br />
          <p>
            Cours ?
            <input type="radio" name="danseClass" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="danseClass" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Soirée ?
            <input type="radio" name="danseParty" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="danseParty" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Spectacle ?
            <input type="radio" name="danseShow" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="danseShow" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
        </div>
      </div>
    )
  }
}

export default Danse
