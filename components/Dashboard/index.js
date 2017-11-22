import React from 'react'

import withSidebar from '../../lib/withSidebar'
import { DashboardEnchance } from '../Core/global'

const DashboardPage = () => (
  <DashboardEnchance>
    <h2>Dashboard</h2>

    <section className='row text-center placeholders'>
      <div className='col-6 col-sm-3 placeholder'>
        <h4>Label</h4>
        <div className='text-muted'>Something else</div>
      </div>
      <div className='col-6 col-sm-3 placeholder'>
        <h4>Label</h4>
        <span className='text-muted'>Something else</span>
      </div>
      <div className='col-6 col-sm-3 placeholder'>
        <h4>Label</h4>
        <span className='text-muted'>Something else</span>
      </div>
      <div className='col-6 col-sm-3 placeholder'>
        <h4>Label</h4>
        <span className='text-muted'>Something else</span>
      </div>
    </section>

    <h2>Section title</h2>
    <div className='table-responsive'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
          </tr>
          <tr>
            <td>1,002</td>
            <td>amet</td>
            <td>consectetur</td>
            <td>adipiscing</td>
            <td>elit</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>Integer</td>
            <td>nec</td>
            <td>odio</td>
            <td>Praesent</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>libero</td>
            <td>Sed</td>
            <td>cursus</td>
            <td>ante</td>
          </tr>
          <tr>
            <td>1,004</td>
            <td>dapibus</td>
            <td>diam</td>
            <td>Sed</td>
            <td>nisi</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardEnchance>
)

export default withSidebar(DashboardPage)
