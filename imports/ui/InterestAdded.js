import React from 'react'

const InterestAdded = props => (
  <div>
    {props.interests.map((interest, index) =>
      <div key={index}>
        <label>{interest.name}</label>
        <ul>
          <li>{interest.detail}</li>
          <li>{interest.preference}</li>
        </ul>
      </div>
    )}
  </div>
)

export default InterestAdded
