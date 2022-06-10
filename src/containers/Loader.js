import React from 'react';

function Loader(Component) {
    return function WithLoadingComponent({ isLoading, data ,page}) {
        if (isLoading) {
            return (
                <p>Loading....</p>
            );
        } else {
            return (
                <>
                    <Component data={data}  page={page}/>
                </>
            )
        }

    }
}

export default Loader;