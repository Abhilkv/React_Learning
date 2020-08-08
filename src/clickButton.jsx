import React from 'react';
import WithCounter from './withCounterHOC';

const Click = (props) => {
    const { count, incrementCount, name } = props;
    // the count and increment props got from WithCounter HOC will be identical
    // name prop is passed from the app component
    return (
        <button onClick={incrementCount}>
            {name}  clicked {count} times
        </button>
    );
};

export default WithCounter(Click, 1);