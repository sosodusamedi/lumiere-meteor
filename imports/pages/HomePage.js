import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BulbsList from '../ui/BulbsList'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to='/add-user'>
          <button>Ajouter un utilisateur</button>
        </Link>
        <BulbsList />
      </div>
    )
  }
}

export default HomePage
