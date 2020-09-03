import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count} = props;
    return (
        <div style={{border: '3px solid maroon'}}>
            <h1>home area point: {count}</h1>
            <Categories count ={count}></Categories>
        </div>
    );
};

export default Home;