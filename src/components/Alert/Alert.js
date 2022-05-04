import React from 'react'
import PropTypes from 'prop-types'

/** Displays an alert message with a bold title */
const Alert = ({ alert }) => {
  return (
    <div>
      <h4>Alert: {alert.title}</h4>
      <h6>{alert.message}</h6>
    </div>
  )
}

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
}

export default Alert
