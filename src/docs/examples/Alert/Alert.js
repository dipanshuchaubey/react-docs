import React from 'react'
import Alert from '../../../components/Alert/Alert'

const AlertExample = () => {
  return (
    <div>
      <Alert
        alert={{
          title: 'Danger!!',
          message: 'This is an alert.',
        }}
      />
    </div>
  )
}

export default AlertExample
