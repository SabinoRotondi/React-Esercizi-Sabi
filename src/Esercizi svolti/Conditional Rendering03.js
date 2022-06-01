import React, { Component } from 'react'

class WelcomeFifth extends Component {
  render() {
    if (this.props.age >= 18 && this.props.age <= 65)
    return (
      <p>Your age is {this.props.age}!</p>
    )
  }
}

export default WelcomeFifth
