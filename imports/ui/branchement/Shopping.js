import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class Shopping extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideUnchecked: true
    }
  }

  handleShoppingClick = () => {
    this.setState({
      hideUnchecked: !this.state.hideUnchecked
    })
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="shopping"
          id="shopping"
          onClick={this.handleShoppingClick.bind(this)} />
        <label htmlFor="shopping">SHOPPING</label><br />
        <div className={ this.state.hideUnchecked ? "hidden" : "visible" }>
          <input
            type="checkbox"
            name="emptying"
            id="emptying" />
          <label htmlFor="emptying">liquidation totale</label><br />
          <input
            type="checkbox"
            name="specialShopDay"
            id="specialShopDay" />
          <label htmlFor="specialShopDay">journée spéciale</label><br />
          <input
            type="checkbox"
            name="market"
            id="market" />
          <label htmlFor="market">marché</label><br />
          <input
            type="checkbox"
            name="fleaMarket"
            id="fleaMarket" />
          <label htmlFor="fleaMarket">brocante</label><br />
        </div>
      </div>
    )
  }
}

export default Shopping
