import React from 'react'
import {compose} from 'recompose'
import withAuth from '../lib/withAuth'
import Dashboard from '../components/Dashboard/index'

const DashboardPage = () => (
  <Dashboard />
)

export default compose(withAuth)(DashboardPage)
