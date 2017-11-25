import React from 'react'

import Stock from '../components/Stock/index'

const StockPage = ({ url: { query } }) => <Stock {...query} />

export default StockPage
