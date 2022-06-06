import React, { Component } from 'react';

class Time extends Component {
    //1.
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    //3.
    componentDidMount = () => {
        this.setI = setInterval(() => this.tick(), 1000);
    }

    //4.
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState !== this.setI) {
            console.log("componentDidUpdate");
        }
    }

    //5.
    componentWillUnmount = () => {
        clearInterval(this.setI);
    }
    //2.
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;