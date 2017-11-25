import React from 'react'

import withSidebar from '../../lib/withSidebar'

import Seller from '../Sell/Seller'

const Sell = props => (
  <Seller {...props} />
)

export default withSidebar(Sell)
