import React from 'react'
import PropTypes from 'prop-types'

/** Displays an alert message with a bold title */
const Alert = ({ alert, theme }) => {
  return (
    <div className={`card card--${theme} card--width-max-content`}>
      <h4 className="card__title text--danger">Alert: {alert.title}</h4>
      <h6 className="text">{alert.message}</h6>
    </div>
  )
}

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
  theme: PropTypes.string,
}

Alert.defaultProps = {
  theme: 'light',
}

export default Alert
