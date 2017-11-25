import React from 'react'

import Dashboard from '../components/Dashboard/index'

const DashboardPage = ({ url: { query } }) => <Dashboard {...query} />

export default DashboardPage
