import React, { Component } from 'react'

class CounterFourth extends Component { 
        state = {
            count: this.props.num,
        };

        componentDidMount(){
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
     <h1>{this.state.count}</h1>
    )
  }
}

CounterFourth.defaultProps = {
    num: 0,
    time: 1000,
    add: 1
}

export default CounterFourth