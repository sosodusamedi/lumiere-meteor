import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import { Bulbs } from '../api/bulbs.js'

class InfoSideInfos extends Component {
  constructor(props) {
    super(props)
  }

  removeBulb() {
    Meteor.call('bulbs.remove', this.props.bulb._id)
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
          <h1>Welcome on <strong>{name}</strong>'s profile</h1>
          <ul>
            <div>
              <label>Numéro de téléphone :</label>
              <li>{phone}</li>
            </div>
            <div>
              <label>Adresse Email :</label>
              <li>{email}</li>
            </div>
            <div>
              <label>Localisation :</label>
              <li>{location}</li>
            </div>
            <div>
              <label>Date de Naissance :</label>
              <li>{birthday}</li>
            </div>
            <div>
              <label>Disponibilités :</label>
              <li>{disponibilities}</li>
            </div>
          </ul>
          <Link to={`/user/${this.props.bulb._id}/update`}>
              <button>Modifier Utilisateur</button>
          </Link>
          <Link to="/">
            <button onClick={this.removeBulb.bind(this)}>
              Supprimer Utilisateur
            </button>
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
})(InfoSideInfos)
