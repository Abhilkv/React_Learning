import React, { useState } from 'react';

// increment is optained from the child components 
const WithCounter = (WrapppedComponent, increment) => {
    const WithCounter = (props) => {
        const {initialValue} = props; // optained from app component as props
        const [count, setCount] = useState(initialValue);

        const incrementCount = () => { 
            setCount((prev) => prev+ increment)
        }
        return (
            <WrapppedComponent count={count} incrementCount={incrementCount} {...props}/>
            // it propvides count and incrementCount function as a props along with all props
            //  ( by using spread operator )got from the 
            // app component to child 
        );
    }

    return WithCounter;

}

export default WithCounter;