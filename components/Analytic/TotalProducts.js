import React from 'react'
import ReactTable from 'react-table'

const columns = [
  {
    Header: 'Product Name',
    accessor: 'product_name'
  },
  {
    Header: 'Total Transactions',
    accessor: 'Transactions'
  },
  {
    Header: 'Total Quantity',
    accessor: 'Total Quantity'
  },
  {
    Header: 'Total Sales',
    accessor: 'Total Sales'
  }
]

const TotalProducts = props => (
  <ReactTable
    // filterable={!false}
    minRows={5}
    defaultPageSize={5}
    data={props.data}
    columns={columns}
  />
)

export default TotalProducts
