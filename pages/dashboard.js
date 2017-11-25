import React from 'react'

import Dashboard from '../components/Dashboard/index'

const DashboardPage = ({url : {query}}) => {
  console.log(query)
  return (
    <Dashboard {...query} />
  )
}

DashboardPage.getInitialProps = async props => {
  return { init: true }
}

export default DashboardPage
