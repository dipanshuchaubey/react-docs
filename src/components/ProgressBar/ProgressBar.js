import React, { Component } from 'react'
import PropTypes from 'prop-types'

/** Display progress bar from 0 to 100 percent */
class ProgressBar extends Component {
  getWidthAsPerPercent(percent, width) {
    return parseInt(width * (percent / 100), 10)
  }

  getBackgroundColor(percent) {
    if (percent === 100) return 'green'

    return percent < 50 ? 'red' : 'lightgreen'
  }

  render() {
    const { width, height, percent } = this.props

    return (
      <div style={{ border: '1px solid lightgray', width }}>
        <div
          style={{
            width: this.getWidthAsPerPercent(percent, width),
            height,
            backgroundColor: this.getBackgroundColor(percent),
          }}
        ></div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  /** Progress Bar's width */
  width: PropTypes.number.isRequired,
  /** Progressed percentage */
  percent: PropTypes.number.isRequired,
  /** Progress Bar's height */
  height: PropTypes.number,
}

ProgressBar.defaultProps = {
  height: 5,
}

export default ProgressBar
