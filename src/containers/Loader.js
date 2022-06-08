import React from 'react';

function Loader(Component) {
    return function WihLoadingComponent({ setLoader, setData }) {
        if (setLoader) {
            return (
             <p>{}</p>
        );
        }else{
            return (
             <p>{}</p>
                );
        }
        return (
            <div>
                <p>Loading....</p>
            </div>
        );
    }
}

export default Loader;