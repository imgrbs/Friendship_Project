import React from 'react'

import Analytic from '../components/Analytic/index'

const AnalyticPage  = ({url : {query}}) => {
  return (
    <Analytic {...query} />
  )
}

AnalyticPage.getInitialProps = async props => {
  return { init: true }
}

export default AnalyticPage
