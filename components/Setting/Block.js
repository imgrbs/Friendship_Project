import React from 'react'

import { DashboardEnchance } from '../Core/global'
import UserTable from './UserTable'
import ModalForm from './ModalForm'

class Block extends React.Component {
  state = {
    check: false
  }

  setCheck = () => {
    this.setState({
      check: !this.state.check
    })
  }

  render() {
    return (
      <DashboardEnchance>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex">
              <h2 className='mr-auto'>User</h2>
              <button onClick={this.setCheck} className='btn btn-primary'>Add User</button>
            </div>
          </div>
        </div>
        <ModalForm handler={this.setCheck} check={this.state.check} className="animated fadeIn" />
        <h4>All Users</h4>
        <UserTable />
      </DashboardEnchance>
    )
  }
}

export default Block
