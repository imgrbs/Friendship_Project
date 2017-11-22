import React from 'react'
import ReactTable from 'react-table'

import axios from '../../lib/axios'
import { DashboardEnchance } from '../Core/global'

const columns = [
  {
    Header: 'Item ID',
    accessor: 'product_id'
  },
  {
    Header: 'Item Name',
    accessor: 'product_name'
  },
  {
    Header: 'Item Price',
    accessor: 'product_price'
  },
  {
    Header: 'Item Amount',
    accessor: 'product_amount'
  },
  {
    Header: 'Item Type',
    accessor: 'category_name'
  },
  {
    Header: 'Created Date',
    accessor: 'created_at'
  },
  {
    Header: 'Updated Date',
    accessor: 'updated_at'
  }
]

class StockList extends React.Component {
  state = {
    data: []
  }

  async componentWillMount () {
   await axios
      .get(`/products/categories`)
      .then(({ data }) => this.setState({ data: data.data }))
      .catch(err => console.log(err)) 
  }

  render () {
    return (
      <DashboardEnchance>
        <div className='container'>
          <div className='row'>
            <div className='col-12 d-flex flex-row align-items-center'>
              <h2 className='mr-auto'>Stock</h2>
              <button className='btn btn-success '>Add Item</button>
            </div>
            <div className='col-12'>
              <ReactTable
                filterable={!false}
                minRows={9}
                defaultPageSize={9}
                data={this.state.data}
                columns={columns}
              />
            </div>
          </div>
        </div>
      </DashboardEnchance>
    )
  }
}

export default StockList
