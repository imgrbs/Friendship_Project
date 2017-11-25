import React from 'react'
import { compose, lifecycle, withState } from 'recompose'

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
    icon: 'fa-user mr-3',
    link: '/setting',
    name: 'User'
  }
]

const NavItem = ({ icon, link, pathname, name }) => (
  // <Link prefetch href={link}>
  <a className={`nav-link ${pathname === link ? 'active' : ''}`} href={`${link}`}>
    <i className={`fa ${icon} mr-2`} aria-hidden='true' />
    {name}
  </a>
  // </Link>
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
