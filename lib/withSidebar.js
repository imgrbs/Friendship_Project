import React from 'react'

import enchance from './enchance'
import Navbar from '../components/Core/navbar'
import Sidebar from '../components/Core/sidebar'

const withSidebar = Component =>
  enchance(props => (
    <div>
      <Navbar {...props} />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
          <Component {...props} />
        </div>
      </div>
    </div>
  ))

export default withSidebar
