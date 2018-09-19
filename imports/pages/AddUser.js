import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'


class AddUser extends Component {

  handleSubmit = e => {
    e.preventDefault()

    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim()
    const phone = ReactDOM.findDOMNode(this.refs.phoneInput).value.trim()
    const email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim()
    const location = ReactDOM.findDOMNode(this.refs.locationInput).value.trim()
    const birthday = ReactDOM.findDOMNode(this.refs.birthdayInput).value.trim()
    const disponibilities = ReactDOM.findDOMNode(this.refs.disponibilitiesInput).value.trim()

    Meteor.call('bulbs.insert',
      name,
      phone,
      email,
      location,
      birthday,
      disponibilities
    )

    ReactDOM.findDOMNode(this.refs.nameInput).value = ''
    ReactDOM.findDOMNode(this.refs.phoneInput).value = ''
    ReactDOM.findDOMNode(this.refs.emailInput).value = ''
    ReactDOM.findDOMNode(this.refs.locationInput).value = ''
    ReactDOM.findDOMNode(this.refs.birthdayInput).value = ''
    ReactDOM.findDOMNode(this.refs.disponibilitiesInput).value = ''
  }

  render() {
    return (
      <div>
        <h2>Time to add a new User!</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
