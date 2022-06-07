import React, { useState } from 'react';

function CounterFun(props) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button>+</button>
            <span>{count}</span>
            <button>-</button>
        </div>
    );
}

export default CounterFun;