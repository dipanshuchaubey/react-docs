import React from 'react'
import CodeExample from './CodeExample'

const ComponentPage = ({ component }) => {
  if (!component || component.length < 1) {
    return <></>
  }

  const { props } = component

  const propNode = []

  for (const prop in props) {
    propNode.push(
      <tr key={prop}>
        <td>{prop}</td>
        <td>{props[prop].description || '-'}</td>
        <td>{props[prop].type.name}</td>
        <td>{props[prop].required ? 'Yes' : 'No'}</td>
        <td>
          {props[prop].defaultValue ? props[prop].defaultValue.value : '-'}
        </td>
      </tr>
    )
  }

  return (
    <div className="content">
      <div className="container">
        <h1>{component.name}</h1>

        <p>Description: {component.description}</p>

        <h3 className="mt-1">Example</h3>

        {component.examples.length > 0
          ? component.examples.map((example, index) => (
              <CodeExample
                key={index}
                component={component.name}
                example={example}
              />
            ))
          : 'No Examples'}

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
                  <th>Default Value</th>
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
