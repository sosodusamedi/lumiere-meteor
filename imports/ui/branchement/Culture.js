import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Culture extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleCultureClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="culture"
          id="culture"
          onClick={this.handleCultureClick.bind(this)} />
        <label htmlFor="culture">CULTURE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Quel type de musée / galerie ?</p>
          <input type="text" ref="museumType" /> <br />
          <p>
            Nouvelle expo ?
            <input type="radio" name="newExhibition" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="newExhibition" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Vernissage ?
            <input type="radio" name="varnishing" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="varnishing" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Journée spéciale ?
            <input type="radio" name="specialExhibitionDay" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="specialExhibitionDay" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Expo photo ?
            <input type="radio" name="photoExhibition" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="photoExhibition" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
        </div>
      </div>
    )
  }
}

export default Culture
