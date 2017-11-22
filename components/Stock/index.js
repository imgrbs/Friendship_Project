import React from 'react'

import withSidebar from '../../lib/withSidebar'

import StockList from '../Stock/StockList'

const Stock = () => (
  <StockList />
)

export default withSidebar(Stock)
