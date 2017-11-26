import React from 'react'
import { compose, lifecycle, withState } from 'recompose'

import colors from './colors'

const items = [
  {
    icon: 'fa-television',
    link: '/dashboard',
    name: 'Overview'
  },
  {
    icon: 'fa-cart-plus',
    link: '/sell',
    name: 'Sell'
  },
  {
    icon: 'fa-archive',
    link: '/stock',
    name: 'Stock'
  },
  {
    icon: 'fa-area-chart',
    link: '/analytic',
    name: 'Analytic'
  },
  {
    icon: 'fa-user',
    link: '/setting',
    name: 'User'
  }
]

const NavItem = ({ icon, link, pathname, name }) => (
  <a className={`nav-link ${pathname === link ? 'active' : ''}`} href={`${link}`}>
    <i className={`ml-2 fa ${icon} mr-3`} aria-hidden='true' />
    {name}
  </a>
)

const state = withState('pathname', 'setPath', '')

const enchance = lifecycle({
  async componentWillMount () {
    const { setPath } = await this.props
    setPath(window.location.pathname)
  }
})

const Sidebar = ({ pathname }) => (
  <nav className='col-3 col-md-2 hidden-xs-down bg-faded sidebar'>
    <ul className='nav nav-pills flex-column'>
      <a className='mt-3 col-12 text-center'>
        <i style={{color: colors.red}} className='fa fa-heart' aria-hidden='true' />
        <h5>Friendship</h5>
        <h6>System</h6>
      </a>
    </ul>
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
