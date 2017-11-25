import React from 'react'

import withSidebar from '../../lib/withSidebar'

import Block from './Block'

const DashboardPage = props => (
  <Block {...props} />
)

export default withSidebar(DashboardPage)
