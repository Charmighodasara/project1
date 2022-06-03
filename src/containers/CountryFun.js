import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    const [countryName , setCountryName] = useState ('India');

   const changeCountry = () => {
        setCountryName ('us');
        console.log("hellow");
    }
    
    return (
        <div>
            <p>{countryName}</p>
            <button onClick={() => changeCountry()}>change country</button>
            <CityFun id="105 " city_Name ={countryName} />
            <p>famous places in country is : {countryName === ('India') ? "tajmahal": "Golden Gate Park"}</p>
        </div>
    );
}

export default CountryFun;