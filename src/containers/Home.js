import React from 'react';
import Loader from './Loader';

function Home({data}) {
    return (
        <div>
            {
                data.map((d ,i)=>{
                    return(
                        <div key={i}>
                        <h3>{d.id}</h3>
                        <h4>{d.name}</h4>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Home;