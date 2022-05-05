import React, { Component } from 'react'
import Navigation from './Navigation'
import ComponentPage from './ComponentPage'
import componentData from '../../config/componentData'

export default class Docs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: window.location.hash.slice(1),
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', (e) => {
      this.setState({ route: window.location.hash.slice(1) })
    })
  }

  render() {
    const { route } = this.state

    return (
      <div className="flex">
        <Navigation
          components={componentData.map((component) => component.name)}
        />

        <ComponentPage
          component={
            route
              ? componentData.filter((component) => component.name === route)[0]
              : []
          }
        />
      </div>
    )
  }
}
