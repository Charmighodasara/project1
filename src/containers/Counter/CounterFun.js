import React, { useState } from 'react';

function CounterFun(props) {
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < 10){
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={() => increment()}>+</button>
            <span>{count}</span>
            <button  onClick={() => decrement()}>-</button>
        </div>
    );
}

export default CounterFun;