import React from 'react'
import styled, { injectGlobal } from 'react-emotion'

const Container = styled.div`
  min-height: 100vh;
`

const Layout = Component => {
  return class withLayout extends React.Component {
    componentWillMount () {
      injectGlobal`
        body {
          background-color: #f8f8f8;
        }
        .btn {
          cursor: pointer;
        }
      `
    }

    render () {
      return (
        <Container className='container-fluid'>
          <Container className='row'>
            <Component />
          </Container>
        </Container>
      )
    }
  }
}

export default Layout
