import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class UpdatingBulb extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      phone: '',
      email: '',
      location: '',
      birthday: '',
      disponibilities: ''
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.bulb.name,
      phone: this.props.bulb.phone,
      email: this.props.bulb.email,
      location: this.props.bulb.location,
      birthday: this.props.bulb.birthday,
      disponibilities: this.props.bulb.disponibilities
    })
  }

  handleChange = e => {
    const newState = this.state
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  handleCheck() {
    console.log(this.state)
    console.log(typeof this.props.bulb._id)
    console.log(typeof this.props.bulb.name)
    console.log(typeof this.props.bulb.phone)
    console.log(typeof this.props.bulb.email)
    console.log(typeof this.props.bulb.location)
    console.log(typeof this.props.bulb.birthday)
    console.log(typeof this.props.bulb.disponibilities)
  }

  handleSubmit = e => {
    e.preventDefault()

    const newBulb = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      location: this.state.location,
      birthday: this.state.birthday,
      disponibilties: this.state.disponibilities
    }

    Meteor.call('bulbs.update', this.props.bulb._id, newBulb)

    this.setState({
      name: '',
      phone: '',
      email: '',
      location: '',
      birthday: '',
      disponibilities: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Updating Bulb</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Prénom Nom :</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange.bind(this)}
              value={this.state.name}/>
          </div>
          <div>
            <label>Numéro de téléphone :</label>
            <input
              type="text"
              name="phone"
              onChange={this.handleChange.bind(this)}
              value={this.state.phone}/>
          </div>
          <div>
            <label>Adresse Email :</label>
            <input
              type="text"
              name="email"
              onChange={this.handleChange.bind(this)}
              value={this.state.email}/>
          </div>
          <div>
            <label>Localisation :</label>
            <input
              type="text"
              name="location"
              onChange={this.handleChange.bind(this)}
              value={this.state.location}/>
          </div>
          <div>
            <label>Date de Naissance :</label>
            <input
              type="text"
              name="birthday"
              onChange={this.handleChange.bind(this)}
              value={this.state.birthday}/>
          </div>
          <div>
            <label>Disponibilités :</label>
            <input
              type="text"
              name="disponibilities"
              onChange={this.handleChange.bind(this)}
              value={this.state.disponibilities}/>
          </div>
          <button type="submit">Modifier</button>
        </form>
        <button onClick={this.handleCheck.bind(this)}>Check</button>
      </div>
    )
  }
}

export default UpdatingBulb
