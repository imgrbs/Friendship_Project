import React from 'react'
import Router from 'next/router'
import { lifecycle } from 'recompose'

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
    await Router.push('/login')
  }
})

export default enchance(withLayout(IndexPage))
