import React from 'react'

const Navigation = ({ components }) => {
  return (
    <ul className="navigation list">
      {components.map((name) => (
        <li key={name}>
          <a className="list__item text--dark" href={`#${name}`}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
