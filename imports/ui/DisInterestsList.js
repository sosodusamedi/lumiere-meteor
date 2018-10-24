import React, { Component } from 'react'


class DisInterestsList extends Component {

  render() {
    if(!this.props.disinterests) return null
    return(
      <div>
        {props.disinterests.map((disinterest, index) =>
          <div key={index}>
            <h6>{disinterest.name}</h6>
            <p>{disinterest.detail}</p>
          </div>
        )}
      </div>
    )
  }
}

export default DisInterestsList
