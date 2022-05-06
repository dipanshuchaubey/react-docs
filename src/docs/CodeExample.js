import React, { useState, useEffect } from 'react'
import CodeWrapper from './CodeWrapper'

const CodeExample = ({ example, component }) => {
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    setShowCode(false)
  }, [example])

  let Component

  try {
    Component = require(`./examples/${component}/${example.name}`).default
  } catch (error) {
    console.log(error)
  }

  return (
    <div className="card" style={{ marginBottom: '0.5rem' }}>
      <p>{example.description}</p>
      <Component />

      <button onClick={() => setShowCode(!showCode)} className="button">
        {showCode ? 'Hide' : 'Show'} Code
      </button>

      {showCode && <CodeWrapper>{example.code}</CodeWrapper>}
    </div>
  )
}

export default CodeExample
