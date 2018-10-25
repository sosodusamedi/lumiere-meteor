import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Cinema extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleCinemaClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="cinema"
          id="cinema"
          onClick={this.handleCinemaClick.bind(this)}/>
        <label htmlFor="cinema">CINEMA</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>Quel type de film ?</p>
          <input type="text" ref="filmType" /> <br />
          <p>
            Indépendant / d'auteur ?
            <input type="radio" name="independant" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="independant" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Journée spéciale ?
            <input type="radio" name="specialFilmDay" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="specialFilmDay" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Avant-première ?
            <input type="radio" name="premiereFilm" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="premiereFilm" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Discussion / Débat ?
            <input type="radio" name="discussFilm" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="discussFilm" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
        </div>
      </div>
    )
  }
}

export default Cinema
