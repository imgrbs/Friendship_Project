import React from 'react'
import { lifecycle } from 'recompose'
import { injectGlobal } from 'react-emotion'

import Container from '../components/Core/global'
import colors from '../components/Core/colors'

const enchance = lifecycle({
  async componentWillMount () {
    injectGlobal`
        body {
          font-family: 'Prompt', sans-serif;
          background-color: ${colors.background};
          color: #666;
        }
        .btn {
          cursor: pointer;
        }
      `
  }
})

const withLayout = Component =>
  enchance(props => (
    <Container className='container-fluid d-flex justify-content-center align-items-center'>
      <div className='row'>
        <Component {...props} />
      </div>
    </Container>
  ))

export default withLayout
