import PropTypes from 'prop-types'

/** Custom Brand Icon */
const Icon = ({ size = 70, color = 'red' }) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundColor: color,
        borderRadius: '50%',
      }}
    ></div>
  )
}

Icon.propTypes = {
  /** Size of icon in pixels */
  size: PropTypes.number,
  /** Color of icon */
  color: PropTypes.string,
}

export default Icon
