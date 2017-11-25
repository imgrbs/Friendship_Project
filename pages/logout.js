import React from 'react'
import { lifecycle } from 'recompose'

import Logout from '../components/Logout/index'

const LogoutPage = () => (
  <Logout />
)

const enchance = lifecycle({
  async componentWillMount () {
    window.location.pathname = '/'
  }
})

export default enchance(LogoutPage)
