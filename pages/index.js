import React from 'react'
import { compose, lifecycle } from 'recompose'

import withLayout from '../lib/withLayout'
import Container from '../components/Core/global'

const IndexPage = props => (
  <Container className='container d-flex justify-content-center align-items-center'>
    <div className='row text-center'>
      <div className='col-12'>
        <h1 className='animated infinite pulse'>Redirect to Login..</h1>
      </div>
    </div>
  </Container>
)

IndexPage.getInitialProps = async (props) => {
  return { init: true }
}

const enchance = lifecycle({
  async componentWillMount () {
    window.location.pathname = '/login'
  }
})

export default compose(
  enchance,
  withLayout
)(IndexPage)
