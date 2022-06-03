import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            cityName: 'surat'
        }
    }

    changCity = () =>{
        this.setState({
             cityName: 'Gandhinagar'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button onClick={() => this.changCity()}> change city</button>
                <p>{this.props.id} {this.props.country_Name}</p>
            </div>
        );
    }
}

export default City;