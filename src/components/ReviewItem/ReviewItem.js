import React from 'react';

const ReviewItem = (props) => {
    const {name,price,shipping,quantity} =props.product
    return (
        <div>

            <h3>this is a review item {name}  </h3>
            
        </div>
    );
};

export default ReviewItem;