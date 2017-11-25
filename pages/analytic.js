import React from 'react'

import Analytic from '../components/Analytic/index'

const AnalyticPage = ({ url: { query } }) => <Analytic {...query} />

export default AnalyticPage
