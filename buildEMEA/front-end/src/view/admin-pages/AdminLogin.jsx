import React from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../../tool-components/Input'

function AdminLogin() {
  return (
    <div>AdminLogin

        <Input type="text" placeholder="Username" />
    </div>
  )
}

export default AdminLogin