import React from 'react';
import Home from './Home';

function Loader(Component) {
    return function WihLoadingComponent({ isLoading }) {
        if (isLoading) {
            return (
                <p>Loading....</p>
            );
        } else {
            return (
               <Home />
            )
        }
      
    }
}

export default Loader;