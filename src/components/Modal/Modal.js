import React, { Component } from 'react'
import PropTypes from 'prop-types'

/** Fade-in Modal. Customizable with custom trigger options */
export default class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trigger: false,
    }
  }

  componentDidMount() {
    this.setState({ trigger: false })
  }

  componentDidUpdate() {
    if (this.props.toggle !== this.state.trigger) {
      this.setState({ trigger: this.props.toggle })
    }
  }

  closeModal() {
    this.setState({ trigger: false })
  }

  render() {
    const { title, body, callback } = this.props

    return (
      <div
        className={`modal ${this.state.trigger ? 'show' : ''}`}
        onClick={() => {
          this.closeModal()
          callback()
        }}
      >
        <div
          className="modal__view text--center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__header">
            <h3>{title}</h3>
          </div>
          <div className="modal__body">{body}</div>
          <button
            className="button button--primary"
            onClick={() => {
              this.closeModal()
              callback()
            }}
          >
            Close
          </button>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  callback: PropTypes.func,
}
