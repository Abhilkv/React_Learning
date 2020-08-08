import React from 'react';
import WithCounter from './withCounterHOC';

const Hover = (props) => {
    const { count, incrementCount, name } = props;
    // the count and increment props got from WithCounter HOC will be identical
    // name prop is passed from the app component
    return (
        <p onMouseOver={incrementCount} style={{backgroundColor: 'white-smoke'}}>
            {name} hovered {count} times
        </p>
    );
};

export default WithCounter(Hover, 100);