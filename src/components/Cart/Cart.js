import React from 'react';

const Cart = () => {
    return (
        <div>
             <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
        </div>
    );
};

export default Cart;