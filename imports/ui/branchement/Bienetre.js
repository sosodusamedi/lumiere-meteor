import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Bienetre extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleBienetreClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="bienetre"
          id="bienetre"
          onClick={this.handleBienetreClick.bind(this)} />
        <label htmlFor="bienetre">BIEN-ETRE</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <input
            type="checkbox"
            name="yoga"
            id="yoga" />
          <label htmlFor="yoga">yoga</label><br />
          <input
            type="checkbox"
            name="meditation"
            id="meditation" />
          <label htmlFor="meditation">meditation / respiration</label><br />
          <input
            type="checkbox"
            name="organic"
            id="organic" />
          <label htmlFor="organic">produit bio</label><br />
        </div>
      </div>
    )
  }
}

export default Bienetre
