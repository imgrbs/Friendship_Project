import React from 'react'
import { DashboardEnchance } from '../Core/global'

import Vending from './Vending'
import Selling from './Selling'

const Seller = ({ sellerName }) => (
  <DashboardEnchance>
    <div className='row'>
      <Selling />
      <Vending sellerName={sellerName} />
    </div>
  </DashboardEnchance>
)

export default Seller
