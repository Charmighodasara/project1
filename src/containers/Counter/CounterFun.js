
import React, { useEffect, useState } from 'react';

function CounterFun(props) {
    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    useEffect(() => {

        console.log('counterupdated');
    }, [count])
    return (
        <div>
            <button onClick={() => decrement()}>-</button>
            <span> {count} </span>
            <button onClick={() => increment()}>+</button>

        </div>
    );
}

export default CounterFun;
