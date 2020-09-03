import React from 'react';


const Header = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h1>hello header: {count}</h1>
            <button onClick={() => setCount(count+1)}>increment</button>
            <br/>
            <button onClick={() => setCount(count -1)}>Decrease</button>
        </div>
    );
};

export default Header;