import React from 'react'

import { DashboardEnchance, InContainer } from '../Core/global'
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
    return <DashboardEnchance>
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h5 className="mr-auto mb-0">
              <i className="fa fa-group ml-2 mr-3" aria-hidden="true" />
              User
            </h5>
            <button onClick={this.setCheck} className="btn btn-primary">
              Add User
            </button>
          </div>
        </div>
        <InContainer>
          <ModalForm handler={this.setCheck} check={this.state.check} className="animated fadeIn" />
          <UserTable />
        </InContainer>
      </DashboardEnchance>
  }
}

export default Block
