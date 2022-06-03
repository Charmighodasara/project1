import React, { useState } from 'react';

function CityFun({id , city_Name}) {

    const [changCity , setChangCity] = useState ('ghandhinagar')

    const changeCity = ()=> {
        setChangCity ('surat')
    }

    return (
        <div>
            <p>{changCity}</p>
            <button onClick={() => changeCity()}>change city</button>
            <p>{id}{city_Name}</p>
            <p>famous places in country is : {changCity === ('ghandhinagar') ? "mahatma mandir": "Dumas beach"}</p>
        </div>
    );
}

export default CityFun;