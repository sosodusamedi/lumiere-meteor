import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Alternatif extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  // handleAlternatifClick = () => {
  //   this.setState({
  //     hideUnchecked: !this.state.hideUnchecked
  //   })
  // }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="alternatif"
          id="alternatif" />
        <label htmlFor="alternatif">ALTERNATIF</label><br />
      </div>
    )
  }
}

export default Alternatif
