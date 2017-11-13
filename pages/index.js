import React from 'react'
import Link from 'next/link'

import withLayout from '../lib/withLayout'

const IndexPage = () => (
  <div className='container'>
    <div className='row text-center'>
      <div className='col-12'>
        <h1>This's Index</h1>
      </div>
      <div className='col-12'>
        <Link href='/login'>
          <a className='btn btn-primary'>Login</a>
        </Link>
      </div>
    </div>
  </div>
)

export default withLayout(IndexPage)
