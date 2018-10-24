import React, { Component } from 'react'


class InterestsList extends Component {

  render() {
    if(!this.props.interests) return null
    return(
      <div>
        {props.interests.map((interest, index) =>
          <div key={index}>
            <h6>{interest.name} - {interest.preference}</h6>
            <p>{interest.detail}</p>
          </div>
        )}
      </div>
    )
  }
}

export default InterestsList
