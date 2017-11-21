import React from 'react'

import enchance from './enchance'
import Container from '../components/Core/global'

const withLayout = Component =>
  enchance(props => (
    <Container className='container-fluid d-flex justify-content-center align-items-center'>
      <div className='row'>
        <Component {...props} />
      </div>
    </Container>
  ))

export default withLayout
