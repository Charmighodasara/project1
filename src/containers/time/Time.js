import React, { Component } from 'react';

class Time extends Component {
    //1. use to set initial value to the component.
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

    //3. use to request data from server
    componentDidMount = () => {
        this.setI = setInterval(() => this.tick(), 1000);
    }

    //4. called whenever particular state/props.
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState !== this.setI) {
            console.log("componentDidUpdate");
        }
    }

    //5. called whenever we move to another component  (used to realse the resources)
    componentWillUnmount = () => {
        clearInterval(this.setI);
    }
    
    //2. called whenever state value changed
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;