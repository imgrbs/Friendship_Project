import React from 'react'
import styled from 'react-emotion'
import { compose, withProps } from 'recompose'

import axios from '../../lib/axios'

const Nav = styled.nav`
  height: 56px;
  z-index: 1;
`

const handler = async () => {
  axios.get('/logout')
    .then(res => {
      window.location.pathname = '/logout'
    })
    .catch(err => console.log(err))
}

const Navbar = ({ ...props, handler }) => (
  <Nav className='navbar navbar-expand-lg fixed-top'>
    <div className='justify-content-flex-end ml-auto form-inline my-2 my-lg-0'>
      <h4 className='mr-3 mt-2'>Hi, {props.user.name}</h4>
      <button onClick={handler} className='btn btn-danger my-2 my-sm-0'>
        <i className='fa fa-sign-out mr-2' aria-hidden='true' />
        Logout
      </button>
    </div>
  </Nav>
)

const omitProps = withProps({
  handler: handler
})

export default compose(
  omitProps
)(Navbar)
