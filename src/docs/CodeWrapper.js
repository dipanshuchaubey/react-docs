import React, { Component } from 'react'
import highlight from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import '../../node_modules/highlight.js/styles/monokai.css'

export default class CodeWrapper extends Component {
  componentDidMount() {
    highlight.registerLanguage('javascript', javascript)
    highlight.highlightBlock(this.element)
  }

  render() {
    return (
      <pre
        className="card"
        ref={(ref) => {
          this.element = ref
        }}
      >
        <code>{this.props.children}</code>
      </pre>
    )
  }
}
