import React from 'react'

import withSidebar from '../../lib/withSidebar'
import { DashboardEnchance } from '../Core/global'

const DashboardPage = () => (
  <DashboardEnchance>
    <h2>Overview</h2>

    <section className='row text-center placeholders mb-3'>
      <div className='col-4 text-center'>
        <div className='card border-success mb-3'>
          <div className='card-header'>Header</div>
          <div className='card-body text-success'>
            <h4 className='card-title'>Success card title</h4>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className='col-4 text-center'>
        <div className='card border-info mb-3'>
          <div className='card-header'>Header</div>
          <div className='card-body text-primary'>
            <h4 className='card-title'>Primary card title</h4>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className='col-4 text-center'>
        <div className='card border-danger mb-3'>
          <div className='card-header'>Header</div>
          <div className='card-body text-secondary'>
            <h4 className='card-title'>Secondary card title</h4>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </section>

    <h2>
      Lasted Transaction <span className='badge badge-success'>New</span>
    </h2>
    <div className='row'>
      <div className='col-12'>
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
      </div>
    </div>
  </DashboardEnchance>
)

export default withSidebar(DashboardPage)
