import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import InterestAdded from '../ui/InterestAdded'
import DisInterestAdded from '../ui/DisInterestAdded'


class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interests: [],
      disinterests: []
    }
  }


  handleInterests() {
    let interests = this.state.interests
    let name = ReactDOM.findDOMNode(this.refs.interestName).value.trim()
    let detail = ReactDOM.findDOMNode(this.refs.interestDetail).value.trim()
    let preference = ReactDOM.findDOMNode(this.refs.interestPreference).value.trim()
    let newInterest = { name, detail, preference }

    if(name === '') return
    interests.push(newInterest)

    this.setState({
      interests: interests
    })
    ReactDOM.findDOMNode(this.refs.interestName).value = ''
    ReactDOM.findDOMNode(this.refs.interestPreference).value = ''
    ReactDOM.findDOMNode(this.refs.interestDetail).value = ''
  }

  handleDisinterests() {
    let disinterests = this.state.disinterests
    let name = ReactDOM.findDOMNode(this.refs.disinterestName).value.trim()
    let detail = ReactDOM.findDOMNode(this.refs.disinterestDetail).value.trim()
    let newDisInterest = { name, detail }

    if(name === '') return
    disinterests.push(newDisInterest)

    this.setState({
      disinterests: disinterests
    })
    ReactDOM.findDOMNode(this.refs.disinterestName).value = ''
    ReactDOM.findDOMNode(this.refs.disinterestDetail).value = ''
  }


  handleSubmit = e => {
    e.preventDefault()

    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim()
    const phone = ReactDOM.findDOMNode(this.refs.phoneInput).value.trim()
    const email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim()
    const location = ReactDOM.findDOMNode(this.refs.locationInput).value.trim()
    const birthday = ReactDOM.findDOMNode(this.refs.birthdayInput).value.trim()
    const disponibilities = ReactDOM.findDOMNode(this.refs.disponibilitiesInput).value.trim()
    const interests = this.state.interests
    const disinterests = this.state.disinterests

    Meteor.call('bulbs.insert',
      name,
      phone,
      email,
      location,
      birthday,
      disponibilities,
      interests,
      disinterests
    )

    ReactDOM.findDOMNode(this.refs.nameInput).value = ''
    ReactDOM.findDOMNode(this.refs.phoneInput).value = ''
    ReactDOM.findDOMNode(this.refs.emailInput).value = ''
    ReactDOM.findDOMNode(this.refs.locationInput).value = ''
    ReactDOM.findDOMNode(this.refs.birthdayInput).value = ''
    ReactDOM.findDOMNode(this.refs.disponibilitiesInput).value = ''
    this.setState({
      interests: [],
      disinterests: []
    })
  }

  render() {
    return (
      <div>
        <h2>Time to add a new User!</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <legend>Information Personnelles</legend>
          <fieldset>
            <div>
              <label>Prénom Nom :</label>
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
              <label>Disponibilités :</label>
              <input
                type='text'
                ref="disponibilitiesInput"
                placeholder="Separate with dash" />
            </div>
          </fieldset>
          <legend>Centres d'intérêts</legend>
          <fieldset>
            <div>
              <label>Aime :</label>
              <br />
              <InterestAdded interests={this.state.interests} />
              <input
                type="text"
                ref="interestName"
                placeholder="Centre d'intérêt"/>
              <input
                type="text"
                ref="interestPreference"
                placeholder="1 (fort) ou 2 ou 3 (plus faible), -1 (non)"/>
              <input
                type="text"
                ref="interestDetail"
                placeholder="Détails"/>
              <button
                type="button"
                name="button"
                onClick={this.handleInterests.bind(this)}>Ajouter Interet</button>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>N'aime pas :</label>
              <br />
              <DisInterestAdded disinterests={this.state.disinterests} />
              <input
                type="text"
                ref="disinterestName"
                placeholder="Centre d'intérêt"/>
              <input
                type="text"
                ref="disinterestDetail"
                placeholder="Détails"/>
              <button
                type="button"
                name="button"
                onClick={this.handleDisinterests.bind(this)}>+</button>
            </div>
          </fieldset>
            <button type="submit">Ajouter !</button>
        </form>

        <Link to="/">
          <button>Homepage</button>
        </Link>
      </div>
    )
  }
}

export default AddUser
