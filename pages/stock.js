import React from 'react'

import Stock from '../components/Stock/index'

const StockPage = ({url : {query}}) => {
  return (
    <Stock {...query} />
  )
}

StockPage.getInitialProps = async props => {
  return { init: true }
}

export default StockPage
