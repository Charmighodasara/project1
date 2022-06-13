import React from 'react';

function Loader(Component) {
    return function componentwithloader({loader , data}) {
        if(loader){
            return(
                <p>Loading....</p>
            )
        }else{
            return(
                <Component data={data}/>
            )
        }
    } 
    
}

export default Loader;