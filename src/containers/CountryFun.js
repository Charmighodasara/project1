import React, { useState } from 'react';

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
        </div>
    );
}

export default CountryFun;