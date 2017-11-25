import React from 'react'
import Router from 'next/router'
import { lifecycle } from 'recompose'

import Logout from '../components/Logout/index'

const LogoutPage = () => (
  <Logout />
)

const enchance = lifecycle({
  async componentWillMount () {
    Router.push('/')
  }
})

export default enchance(LogoutPage)
