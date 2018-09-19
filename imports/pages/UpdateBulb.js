import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { Bulbs } from '../api/bulbs.js'

class UpdateBulb extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = e => {
    e.preventDefault()

    let name = this.props.bulb.name
    let phone = this.props.bulb.phone
    let email = this.props.bulb.email
    let location = this.props.bulb.location
    let birthday = this.props.bulb.birthday
    let disponibilities = this.props.bulb.disponibilities

    if (ReactDOM.findDOMNode(this.refs.nameInput).value !== '')
    name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim()

    if (ReactDOM.findDOMNode(this.refs.phoneInput).value !== '')
    phone = ReactDOM.findDOMNode(this.refs.phoneInput).value.trim()

    if (ReactDOM.findDOMNode(this.refs.emailInput).value !== '')
    email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim()

    if (ReactDOM.findDOMNode(this.refs.locationInput).value !== '')
    location = ReactDOM.findDOMNode(this.refs.locationInput).value.trim()

    if (ReactDOM.findDOMNode(this.refs.birthdayInput).value !== '')
    birthday = ReactDOM.findDOMNode(this.refs.birthdayInput).value.trim()

    if (ReactDOM.findDOMNode(this.refs.disponibilitiesInput).value !== '')
    disponibilities = ReactDOM.findDOMNode(this.refs.disponibilitiesInput).value.trim()

    const bulb = { name, phone, email, location, birthday, disponibilities }
    
    Meteor.call('bulbs.update', this.props.bulb._id, bulb)
  }

  render() {
    if (!this.props.ready) {
      return <div>Loading...</div>
    } else {
      const {
        name,
        phone,
        email,
        location,
        birthday,
        disponibilities
      } = this.props.bulb
      return (
        <div>
          <h1>Update Page of {name}</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Prénom Nom</label>
              <br />
              <small>Update <em>{name}</em> to:</small>
              <input
                type="text"
                ref="nameInput" />
            </div>
            <div>
              <label>Numéro de téléphone</label>
              <br />
              <small>Update <em>{phone}</em> to:</small>
              <input
                type="text"
                ref="phoneInput" />
            </div>
            <div>
              <label>Adresse Email</label>
              <br />
              <small>Update <em>{email}</em> to:</small>
              <input
                type="text"
                ref="emailInput" />
            </div>
            <div>
              <label>Localisation</label>
              <br />
              <small>Update <em>{location}</em> to:</small>
              <input
                type="text"
                ref="locationInput" />
            </div>
            <div>
              <label>Date de Naissance</label>
              <br />
              <small>Update <em>{birthday}</em> to:</small>
              <input
                type="text"
                ref="birthdayInput" />
            </div>
            <div>
              <label>Disponibilités</label>
              <br />
              <small>Update <em>{disponibilities}</em> to:</small>
              <input
                type="text"
                ref="disponibilitiesInput" />
            </div>
            <button type="submit">Modifier</button>
          </form>

          <Link to={`/user/${this.props.bulb._id}`}>
              <button>Retour au profil</button>
          </Link>
          <hr />
          <Link to="/">
            <button>Homepage</button>
          </Link>
        </div>
      )
    }
  }
}

export default withTracker(({ match }) => {
  const bulbId = match.params.id
  const load = Meteor.subscribe('bulbs')

  return {
    bulb: Bulbs.findOne(bulbId),
    ready: load.ready()
  }
})(UpdateBulb)
