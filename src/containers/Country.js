import React, { Component } from 'react';
import City from './City';

class Country extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countryName : 'India',

        }
    }
    
    changeCountry = () => {
        this.setState({
            countryName : 'us',

        })
    }
   
    render() {
        return (
            <div>
                <p>{this.state.countryName}</p>
                <button onClick={() => this.changeCountry()}>change country</button>            
                  
                <p>famous places in this country is : {this.state.countryName ==='India' ? "tajmahal": "Magic Kingdom, Walt Disney World" }</p>

                <City id="110" country_Name={this.state.countryName}/>
            </div>
        );
    }
}

export default Country;