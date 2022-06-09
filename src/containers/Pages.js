import React from 'react';


function Pages({page}) {
    return (
        <div>
        {
            page.map((p ,i)=>{
                return(
                    <div key={i}>
                    <h3>{p.id}</h3>
                    <h4>{p.name}</h4>
                    </div>
                )
            })
        }
    </div>
    );
}

export default Pages;