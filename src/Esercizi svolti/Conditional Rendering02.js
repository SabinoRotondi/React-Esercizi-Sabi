import React, { Component } from 'react'

class WelcomeFourth extends Component {
  render() {
    return (
        <>
        {!!this.props.age && 
        <p>Your age is {this.props.age}</p>}
        </>
    )
  }
}

export default WelcomeFourth
