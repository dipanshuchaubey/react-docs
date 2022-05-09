import React from 'react'
import PropTypes from 'prop-types'

/** Label for Input  */
const Label = ({ label, htmlFor, required = false }) => {
  console.log(required)

  return (
    <div>
      <label htmlFor={htmlFor}>
        {label}{' '}
        <span className="text--danger" style={{ fontWeight: 'bold' }}>
          {required && '*'}
        </span>
      </label>
    </div>
  )
}

Label.propTypes = {
  /** For attribute for better reachability */
  htmlFor: PropTypes.string.isRequired,
  /** Label text */
  label: PropTypes.string.isRequired,
  /** Tells if the input is required or not */
  required: PropTypes.bool,
}

export default Label
