import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Etudiant extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleEtudiantClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="etudiant"
          id="etudiant"
          onClick={this.handleEtudiantClick.bind(this)} />
        <label htmlFor="etudiant">ETUDIANT</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <p>
            Soirée étudiante ?
            <input type="radio" name="studentParty" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="studentParty" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Soirée erasmus ?
            <input type="radio" name="erasmusParty" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="erasmusParty" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Journée / Evenement étudiant ?
            <input type="radio" name="studentEvent" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="studentEvent" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
          <p>
            Projets réalisés par étudiants ?
            <input type="radio" name="studentProjects" value="yes" id="yes" defaultChecked /> <label htmlFor="yes">OUI</label>
            <input type="radio" name="studentProjects" value="no" id="no" /> <label htmlFor="no">NON</label>
          </p>
        </div>
      </div>
    )
  }
}

export default Etudiant
