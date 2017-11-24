import React from 'react'

import { DashboardEnchance } from '../Core/global'
import UserTable from './UserTable'
import UserForm from './UserForm'

const Block = () => (
  <DashboardEnchance>
    <h2>User</h2>
    <UserForm />
    <h4>All Users</h4>
    <UserTable />
  </DashboardEnchance>
)

export default Block
