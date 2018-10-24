import React from 'react'

const DisInterestAdded = props => (
  <div>
    {props.disinterests.map((disinterest, index) =>
      <div key={index}>
        <label>{disinterest.name}</label>
        <ul>
          <li>{disinterest.detail}</li>
        </ul>
      </div>
    )}
  </div>
)

export default DisInterestAdded
