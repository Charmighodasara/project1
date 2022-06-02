import React, { useState } from 'react';

function CityFun(props) {

    const [changCity , setChangCity] = useState ('ghandhinagar')

    const changeCity = ()=> {
        setChangCity ('surat')
    }

    return (
        <div>
            <p>{changCity}</p>
            <button onClick={() => changeCity()}>change city</button>
        </div>
    );
}

export default CityFun;