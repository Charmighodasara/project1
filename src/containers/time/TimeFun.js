import React, { useEffect, useState } from 'react';

function TimeFun(props) {
    const [time, setTime] = useState(new Date())

    const tick = () => {
        setTime(new Date())
    }

    useEffect(() => {

        // componentDidMount . componentDidUpdate
        const setI = setInterval(() => tick(), 1000)

        // componentWillUnmount 
        return () => {
            clearInterval(setI)
        }

    }, [time])

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimeFun;