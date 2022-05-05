import React from 'react'
import PropTypes from 'prop-types'

/** Displays an alert message with a bold title */
const Alert = ({ alert }) => {
  return (
    <div className="card card--light card--width-max-content">
      <h4 className="card__title text--danger">Alert: {alert.title}</h4>
      <h6 className="text">{alert.message}</h6>
    </div>
  )
}

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
}

export default Alert
