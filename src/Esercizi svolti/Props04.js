import React, { Component } from 'react'

class WelcomeStrong extends Component {
  render() {
    return (
      <p>Welcome, {this.props.name}!</p>
    )
  }
}

export default WelcomeStrong
