import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import {
  Alternatif,
  Atelier,
  Bar,
  Bienetre,
  Bouffe,
  Business,
  Cinema,
  Concert,
  Conference,
  Culture,
  Danse,
  Ecologie,
  Etranger,
  Etudiant,
  Lgbt,
  Photo,
  Salon,
  Shopping,
  Soiree,
  Sport,
  Tatouage,
  Theatre,
  Ville
} from '../ui/branchement'


class Branchement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hideUndefaultChecked: true
    }
  }

  handleCheck = () => {
    this.setState({
      hideUndefaultChecked: !this.state.hideUndefaultChecked
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h2>Branchement</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <legend>Informations Personnelles</legend>
          <fieldset>
            <div>
              <label>Prénom NOM :</label>
              <input
                type='text'
                ref="nameInput" />
            </div>
            <div>
              <label>Telephone :</label>
              <input
                type='text'
                ref="phoneInput" />
            </div>
            <div>
              <label>Email :</label>
              <input
                type='text'
                ref="emailInput" />
            </div>
            <div>
              <label>Ville/Quartier :</label>
              <input
                type='text'
                ref="locationInput"
                placeholder='Ville / Quartier' />
            </div>
            <div>
              <label>Date de Naissance :</label>
              <input
                type='text'
                ref="birthdayInput"
                placeholder='JJ/MM/AAAA' />
            </div>
            <div>
              Quotes :<br />
              <textarea></textarea>
            </div>
          </fieldset>
          <legend>Centres d'intérêt</legend>
          <fieldset>
            <Bar />
            <Soiree />
            <Concert />
            <Etudiant />
            <Danse />
            <Alternatif />
            <Culture />
            <Cinema />
            <Theatre />
            <Conference />
            <Ville />
            <Bouffe />
            <Sport />
            <Bienetre />
            <Ecologie />
            <Atelier />
            <Shopping />
            <Business />
            <Photo />
            <Lgbt />
            <Etranger />
            <Salon />
            <Tatouage />
            <p>Autre</p>
            <textarea placeholder="Autre centre d'intérêt cité"></textarea>
          </fieldset>
          <legend>Prix</legend>
          <fieldset>
            <p>
              Majoritairement gratuit ?
              <input type="radio" name="free" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
              <input type="radio" name="free" value="no" id="no" /> <label htmlFor="no">NON</label>
            </p>
            <p>
              Tarif spécial ?
              <input type="checkbox" name="etudiant" id="etudiant" /> <label htmlFor="etudiant">étudiant</label>
              <input type="checkbox" name="moins26" id="moins26" /> <label htmlFor="moins26">moins 26ans</label>
              <input type="checkbox" name="aucun" id="aucun" /> <label htmlFor="aucun">aucun</label>
            </p>
            <p>Autre Tarif:</p>
            <input type="text" name="otherPrice" />
            <p>
              Fourchette
              <input type="text" ref="priceInput" />
            </p>
          </fieldset>
          <legend>Déplacement</legend>
          <fieldset>
            <p>
              En transport ?
              <input type="radio" name="transport" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
              <input type="radio" name="transport" value="no" id="no" /> <label htmlFor="no">NON</label>
            </p>
            <p>
              Autre
              <input type="text" ref="transportInput" />
            </p>
          </fieldset>
          <legend>Contact</legend>
          <fieldset>
            <p>
              Ton léger accepté ?
              <input type="radio" name="ton" value="ok" id="ok" defaultChecked /> <label htmlFor="ok">OK</label>
              <input type="radio" name="ton" value="pasok" id="pasok" /> <label htmlFor="ok">NON</label>
            </p>
            <p>
              Surnom ?
              <input type="radio" name="surname" value="ok" id="ok" defaultChecked /> <label htmlFor="ok">OK</label>
              <input type="radio" name="surname" value="pasok" id="pasok" /> <label htmlFor="pasok">NON</label>
            </p>
            <p>
              Fréquence ?
              <input type="text" ref="frequency" />
            </p>
          </fieldset>
          <legend>Concept</legend>
          <fieldset>
            <textarea placeholder="Remarques"></textarea>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Branchement
