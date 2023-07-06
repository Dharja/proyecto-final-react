import React from 'react';

    const ItemQuantitySelector = ({ quantity, onChange }) => {
    const handleDecrease = () => {
        onChange(quantity - 1);
    };

    const handleIncrease = () => {
        onChange(quantity + 1);
    };

    return (
        <div>
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
        </div>
    );
    };

export default ItemQuantitySelector;
