import React, { Component } from 'react'

class WelcomeThird extends Component {
  render() {
      if (this.props.age >= 18)
    return (
      <p>Your age is {this.props.age}!</p>
    )
  }
}

export default WelcomeThird
