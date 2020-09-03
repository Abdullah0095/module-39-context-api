import React from 'react';

const CategoryDetail = (props) => {
    const{count} = props;
    return (
        <div>
            <p>category detail is here: {count}</p>
        </div>
    );
};

export default CategoryDetail;