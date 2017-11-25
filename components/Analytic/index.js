import React from 'react'

import withSidebar from '../../lib/withSidebar'

import GraphList from './GraphList'

const Analytic = props => (
  <GraphList {...props} />
)

export default withSidebar(Analytic)
