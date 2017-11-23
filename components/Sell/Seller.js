import React from 'react'
import { withProps } from 'recompose'
import { DashboardEnchance } from '../Core/global'

import Vending from './Vending'
import Selling from './Selling'

class Seller extends React.Component {
  state = {
    totalPrices: 0,
    totalAmounts: [],
    sellerName: ''
  }

  handlePrice = (price) => {
    this.setState({
      totalPrices: this.state.totalPrices + price
    })
  }

  handleAmount = async (id, amount) => {
    let totalAmounts = await this.state.totalAmounts
    totalAmounts[id] = amount
    this.setState({
      totalAmounts: totalAmounts
    })
  }

  handleRemove = async (id) => {
    let totalAmounts = await this.state.totalAmounts
    await totalAmounts.splice(id, 1)
    this.setState({
      totalAmounts: totalAmounts
    })
  }

  render () {
    return (
      <DashboardEnchance>
        <div className="row">
          <Selling 
            handlePrice={this.handlePrice}
            handleAmount={this.handleAmount}
            handleRemove={this.handleRemove}
          />
          <Vending
            totalAmounts={this.state.totalAmounts.reduce( (a, b) => a+b, 0 )}
            totalPrices={this.state.totalPrices}
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
