import React from 'react'
import ReactTable from 'react-table'

const columns = [
  {
    Header: 'Transaction ID',
    accessor: 'transaction_id'
  },
  {
    Header: 'Product ID',
    accessor: 'product_id'
  },
  {
    Header: 'Bill ID',
    accessor: 'bill_id'
  },
  {
    Header: 'Quantity',
    accessor: 'quantity'
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

const TransactionTable = props => (
  <ReactTable
    filterable={!false}
    minRows={5}
    defaultPageSize={5}
    data={props.data}
    columns={columns}
  />
)

export default TransactionTable
