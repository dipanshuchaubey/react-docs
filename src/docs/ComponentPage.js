import React, { useEffect, useState } from 'react'
import CodeWrapper from './CodeWrapper'

const ComponentPage = ({ component }) => {
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    setShowCode(false)
  }, [component])

  const { props } = component

  const propNode = []

  for (const prop in props) {
    propNode.push(
      <tr key={prop}>
        <td>{prop}</td>
        <td>{props[prop].description}</td>
        <td>{props[prop].type.name}</td>
        <td>{props[prop].required ? 'Yes' : 'No'}</td>
      </tr>
    )
  }

  let ExampleComponent
  try {
    ExampleComponent =
      require(`./examples/${component.name}/${component.name}`).default
  } catch (error) {
    console.log(error)
  }

  return (
    <div className="content">
      <div className="container">
        <h1>{component.name}</h1>

        <p>Description: {component.description}</p>

        <h3 className="mt-1">Example</h3>
        {ExampleComponent ? <ExampleComponent /> : 'No Examples'}

        <h3 onClick={() => setShowCode(!showCode)} className="button mt-1">
          {showCode ? 'Hide' : 'Show'} Code
        </h3>

        {showCode && <CodeWrapper>{component.code}</CodeWrapper>}

        {props ? (
          <div className="mt-1">
            <h3>Props</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Required</th>
                </tr>
              </thead>

              <tbody>{propNode}</tbody>
            </table>
          </div>
        ) : (
          'No Props'
        )}
      </div>
    </div>
  )
}

export default ComponentPage
