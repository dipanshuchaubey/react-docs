import React from 'react'
import PropTypes from 'prop-types'

/** This component says hello to the currently logged in user */
const SayHello = ({ user }) => {
  return (
    <div>
      <h3>Hi {user}</h3>
    </div>
  )
}

SayHello.propTypes = {
  /** Logged in users username */
  user: PropTypes.string.isRequired,
  /** Current time as per users prefered timezone */
  time: PropTypes.string,
}

SayHello.defaultProps = {
  user: 'Dipanshu',
}

export default SayHello
