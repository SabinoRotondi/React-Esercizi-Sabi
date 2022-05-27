import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <p>Welcome, {this.props.name}!</p>
    )
  }
}

export default Welcome


/*Create a Welcome class component that receives a name prop and renders the Welcome,
 {name}! message within a p tag. Render this component to you App component, 
 passing it a name prop of your choosing.*/