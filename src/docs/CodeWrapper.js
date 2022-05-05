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
        style={{
          padding: '1rem',
          margin: '0.5rem',
          borderRadius: '10px',
          boxShadow: '0 0 3px #222',
        }}
        ref={(ref) => {
          this.element = ref
        }}
      >
        <code>{this.props.children}</code>
      </pre>
    )
  }
}
