import React, { Component } from 'react'

class WelcomeSixth extends Component {
  render() {
    if (this.props.age >= 18 && this.props.age <= 65 && this.props.name === 'John')
    return (
        <>
        <p>Your name is {this.props.name}</p>
      <p>Your age is {this.props.age}!</p>
      </>
    )
  }
}

export default WelcomeSixth
