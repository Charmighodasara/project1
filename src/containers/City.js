import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            cityName: 'surat',
            famous_Place : 'Dumas beach'
        }
    }

    changCity = () =>{
        this.setState({
             cityName: 'Gandhinagar',
             famous_Place : 'mahatma mandir'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button onClick={() => this.changCity()}> change city</button>
                <p>{this.props.id} {this.props.country_Name}</p>
                
                <p>famous place in this city is : {this.state.famous_Place}</p>
            </div>
        );
    }
}

export default City;