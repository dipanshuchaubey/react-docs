import React from 'react'

const ComponentPage = ({ component }) => {
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

  return (
    <div className="content">
      <h1>{component.name}</h1>

      <p>Description: {component.description}</p>

      <h3 className="mt-1">Code</h3>
      <code>{component.code}</code>

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
  )
}

export default ComponentPage
