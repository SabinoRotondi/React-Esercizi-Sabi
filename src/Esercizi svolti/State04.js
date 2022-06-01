import React, { Component } from 'react'
import {CounterDisplay} from './State04Counter'

class CounterThird extends Component { 
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
    <CounterDisplay count={this.state.count} />
     </>
    )
  }
}

CounterThird.defaultProps = {
    num: 0,
    time: 1000,
    add: 1
}

export default CounterThird