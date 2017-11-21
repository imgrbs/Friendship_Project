import React from 'react'
import Link from 'next/link'
import {compose, lifecycle, withState} from 'recompose'

const state = withState('pathname', 'setPath', '')

const enchance = lifecycle({
  async componentWillMount () {
    const { setPath } = await this.props
    setPath(location.pathname)
  }
})

const Sidebar = props => (
  <nav className='col-3 col-md-2 hidden-xs-down bg-faded sidebar'>
    <ul className='nav nav-pills flex-column'>
      <li className='nav-item'>
        <Link href={`/dashboard`}>
          <a className={`nav-link ${props.pathname === '/dashboard' ? 'active' : ''}`} href='#'>
            Overview
          </a>
        </Link>
      </li>
      <li className='nav-item'>
        <Link href={`/sell`}>
          <a className={`nav-link ${props.pathname === '/sell' ? 'active' : ''}`} href='#'>
            Sell
          </a>
        </Link>
      </li>
      <li className='nav-item'>
        <Link href={`/analytic`}>
          <a className={`nav-link ${props.pathname === '/analytic' ? 'active' : ''}`} href='#'>
            Analytics
          </a>
        </Link>
      </li>
      <li className='nav-item'>
        <Link href={`/setting`}>
          <a className={`nav-link ${props.pathname === '/setting' ? 'active' : ''}`} href='#'>
            Setting
          </a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default compose(
  state,
  enchance
)(Sidebar)
