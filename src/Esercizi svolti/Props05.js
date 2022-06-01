import React, { Component } from 'react'
import WelcomeSec  from './Props03'

class Age extends Component {
  render() {
    return (
        <WelcomeSec age={this.props.age}/>
    )
  }
}

export default Age