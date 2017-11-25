import React from 'react'
import ReactTable from 'react-table'

import axios from '../../lib/axios';

const columns = [
  {
    Header: "Employee ID",
    accessor: "employee_id"
  },
  {
    Header: "Employee Name",
    accessor: "Employee Name"
  },
  {
    Header: "Role",
    accessor: "role"
  },
  {
    Header: "Boss Name",
    accessor: "Boss Name"
  },
  {
    Header: "Tel.",
    accessor: "telno"
  },
  {
    Header: "Nation ID",
    accessor: "nation_id"
  },
  {
    Header: "Address",
    accessor: "address"
  }
]

class UserTable extends React.Component {
  state = { 
    users: []
  }

  async componentWillMount () {
    axios.get('/users/selfjoin')
      .then(({data}) => this.setState({ users: data.data[0]}))    
  }

  render() {
    return (
      <ReactTable 
        columns={columns}
        defaultPageSize={10}
        data={this.state.users}
      />
    )
  }
}

export default UserTable