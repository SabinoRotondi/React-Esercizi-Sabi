import React, { Component } from 'react'

export class CounterDisplay extends Component {
  render() {
    return (
      <h1>{this.props.count}</h1>
    )
  }
}

export default CounterDisplay