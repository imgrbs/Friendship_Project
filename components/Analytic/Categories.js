import React from 'react'
import ReactTable from 'react-table'

const columns = [
  {
    Header: 'Employee Name',
    accessor: 'fname'
  },
  {
    Header: 'Total Sales',
    accessor: 'Total Sales'
  }
]

const Categories = props => (
  <ReactTable
    className='mt-3'
    minRows={5}
    defaultPageSize={5}
    data={props.data}
    columns={columns}
  />
)

export default Categories