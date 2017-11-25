import React from 'react'

import Sell from '../components/Sell/index'

const SellPage = ({ url: { query } }) => <Sell {...query} />

export default SellPage
