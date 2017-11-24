import React from 'react'
import styled from 'react-emotion'
import Router from 'next/router'
import { compose, withProps } from 'recompose'

const Nav = styled.nav`
  height: 56px;
`

const handler = async () => {
  await localStorage.clear()
  setTimeout(() => {
    Router.push('/')
  }, 100)
}

const Navbar = ({ name, handler }) => (
  <Nav className='navbar navbar-expand-lg fixed-top'>
    <a className='ml-4 navbar-brand' href='#'>
      Friendship System
    </a>
    <div className='justify-content-flex-end ml-auto form-inline my-2 my-lg-0'>
      <h4 className='mr-3 mt-2'>Hi, {name}</h4>
      <button onClick={handler} className='btn btn-danger my-2 my-sm-0'>
        <i className='fa fa-sign-out mr-2' aria-hidden='true' />
        Logout
      </button>
    </div>
  </Nav>
)

const omitProps = withProps({
  // name: JSON.parse(window.localStorage.getItem('user')).fname,
  handler: handler
})

export default compose(
  omitProps
)(Navbar)
