import React, { Component } from 'react'

class CounterSec extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.num,
        }    
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.add)
                }
            })
        }, this.props.time);
    }

  render() {
    return (
        <>
     <h1>{this.state.count}</h1>
     </>
    )
  }
}

CounterSec.defaultProps = {
    num: 0,
    time: 1000,
    add: 1
}

export default CounterSec