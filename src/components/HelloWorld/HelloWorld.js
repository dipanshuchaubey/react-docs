import React from 'react'
import PropTypes from 'prop-types'

/** This component will say hello to the user */
const HelloWorld = ({ name }) => {
  return <div>Hello {name}</div>
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
}

export default HelloWorld
