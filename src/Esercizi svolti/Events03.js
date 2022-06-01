import React, { Component } from 'react'

class ButtonTrack extends Component {
  state = {
    track: 0
  };
ButtonTrack = (event) => {
    this.setState({
        track: event.target.value
    })
}
  render() {
    return (
      <>
      <h1>Last Clicked: {this.state.track}</h1>
        <button onClick={this.ButtonTrack} value={1}>1</button>
        <button onClick={this.ButtonTrack} value={2}>2</button>
        <button onClick={this.ButtonTrack} value={3}>3</button>
      </>
    )
  }
}
export default ButtonTrack