import React, { Component } from 'react'

class ButtonTest extends Component {
  state = {
    count: 0
  };
ButtonIncrement = () => {
  this.setState((state) => {
    return {
      count: state.count + 1
    }
  })
}
  render() {
    return (
      <>
      <h1>Counter: {this.state.count}</h1>
      <button onClick={this.ButtonIncrement}>Add</button>
      </>
    )
  }
}
export default ButtonTest