    import React from 'react';

    const CartWidget = ({ itemCount }) => {
    return (
        <div>
        <img src={cartIcon} alt="Cart" />
        <span>{itemCount}</span>
        </div>
    );
    };

export default CartWidget;
