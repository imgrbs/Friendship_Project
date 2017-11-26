import React from 'react'

import withSidebar from '../../lib/withSidebar'

import StockList from '../Stock/StockList'

const Stock = props => (
  <StockList {...props} />
)

export default withSidebar(Stock)
