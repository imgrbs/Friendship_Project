import React from 'react'
import { withProps } from 'recompose'
import { DashboardEnchance } from '../Core/global'

import Vending from './Vending'
import Selling from './Selling'

class Seller extends React.Component {
  state = {
    totalPrices: 0,
    totalAmounts: 0,
    sellerName: ''
  }

  handlePrice = (price) => {
    this.setState({
      totalPrices: this.state.totalPrices + price
    })
  }

  render () {
    return (
      <DashboardEnchance>
        <div className="row">
          <Selling handlePrice={this.handlePrice} />
          <Vending
            totalPrices={this.state.totalPrices}
            totalAmounts={this.state.totalAmounts}
            sellerName={this.state.sellerName}
          />
        </div>
      </DashboardEnchance>
    )
  }
}

const omitProps = withProps({
  sellerName: 'Potae'
})

export default omitProps(Seller)
