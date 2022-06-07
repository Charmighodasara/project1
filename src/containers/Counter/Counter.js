import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({

        })
        console.log('increment');
        
    }
    decrement = () => {
        this.setState({

        })
        console.log('decrement');
    }
    render() {

        return (
            <div>
                <button onClick={()=> this.increment()}> + </button>
                <span>{this.state.count}</span>
                <button onClick={()=> this.decrement()}> - </button>
            </div>
        );
    }
}

export default Counter;