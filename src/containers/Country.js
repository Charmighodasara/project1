import React, { Component } from 'react';
import City from './City';

class Country extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            countryName : 'India',
        }
    }
    
    changeCountry = () =>{
        this.setState({
            countryName : 'us',
        })
    }
   
    render() {
        return (
            <div>
                <p>{this.state.countryName}</p>
                <button onClick={() => this.changeCountry()}>change country</button>              
                <City id="110" country_Name={this.state.countryName}/>
                <p>famous places : {this.state.countryName ==='India' ? "tajmahal": "Golden Gate Park" }</p>
            </div>
        );
    }
}

export default Country;