import React, { Component } from 'react';

class Counter extends Component {
    //1.
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        if (this.state.count < 10) {
            this.setState({
                count: (this.state.count + 1)
            })
        }
        console.log('increment');

    }
    decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: (this.state.count - 1)
            })
        }
        console.log('decrement');
    }
    
    
    //2.
    render() {

        return (
            <div>
                <p>counter</p>
                <button onClick={() => this.increment()}>  +  </button>
                <span>{this.state.count}</span>
                <button onClick={() => this.decrement()}>  -  </button>
            </div>
        );
    }
}

export default Counter;


