import React from 'react'
import ReactTable from 'react-table'

import { DashboardEnchance } from '../Core/global'

const data = [
  {
    product_id: '1',
    product_name: 'Tae',
    product_price: 100.52,
    product_amount: 596
  },
  {
    product_id: '2',
    product_name: 'AEW',
    product_price: 10.52,
    product_amount: 59
  },
  {
    product_id: '3',
    product_name: 'WOW',
    product_price: 1.52,
    product_amount: 796
  }
]

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

const StockList = () => (
  <DashboardEnchance>
    <div className='container'>
      <div className='row'>
        <div className='col-12 d-flex flex-row align-items-center'>
          <h2 className='mr-auto'>Stock</h2>
          <button className='btn btn-success '>
            Add Item
          </button>
        </div>
        <div className='col-12'>
          <ReactTable
            filterable={!false}
            minRows={9}
            data={data}
            columns={columns}
          />
        </div>
      </div>
    </div>
  </DashboardEnchance>
)

export default StockList
