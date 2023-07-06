import React from 'react';

    const Brief = ({ totalPrice }) => {
    return (
        <div>
        <h3>Order Summary</h3>
        <p>Total Price: {totalPrice}</p>
        </div>
    );
    };

export default Brief;
