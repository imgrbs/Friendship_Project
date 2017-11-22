import React from 'react'
import Link from 'next/link'
import styled from 'react-emotion'
import { compose, lifecycle, withState } from 'recompose'

const items = [
  {
    link: '/dashboard',
    name: 'Overview'
  },
  {
    link: '/sell',
    name: 'Sell'
  },
  {
    link: '/stock',
    name: 'Stock'
  },
  {
    link: '/analytic',
    name: 'Analytic'
  },
  {
    link: '/setting',
    name: 'Setting'
  }
]

const NavItem = ({ link, pathname, name }) => (
  <Link href={link}>
    <a className={`nav-link ${pathname === link ? 'active' : ''}`} href='#'>
      {name}
    </a>
  </Link>
)

const state = withState('pathname', 'setPath', '')

const enchance = lifecycle({
  async componentWillMount () {
    const { setPath } = await this.props
    setPath(location.pathname)
  }
})

const Sidebar = ({ pathname }) => (
  <nav className='col-3 col-md-2 hidden-xs-down bg-faded sidebar'>
    <ul className='nav nav-pills flex-column'>
      {items.map((props, key) => (
        <NavItem key={key} pathname={pathname} {...props} />
      ))}
    </ul>
  </nav>
)

export default compose(
  state,
  enchance
)(Sidebar)
