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
        </div>
    );
}

export default CityFun;