import React from 'react'

import Sell from '../components/Sell/index'

const SellPage = ({url : {query}}) => {
  return (
    <Sell {...query} />
  )
}

SellPage.getInitialProps = async props => {
  return { init: true }
}

export default SellPage
