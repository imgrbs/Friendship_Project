import React from 'react'
import Router from 'next/router'
import { compose, lifecycle } from 'recompose'

import withLayout from '../lib/withLayout'
import Container from '../components/Core/global'

const IndexPage = () => (
  <Container className='container d-flex justify-content-center align-items-center'>
    <div className='row text-center'>
      <div className='col-12'>
        <h1>Redirect to Login..</h1>
      </div>
    </div>
  </Container>
)

const enchance = lifecycle({
  async componentWillMount () {
    Router.push('/login')
  }
})

export default compose(
  enchance,
  withLayout
)(IndexPage)
