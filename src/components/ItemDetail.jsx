import React, { useState, useContext } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';
import { CartContext } from './CartContext';

    const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleQuantityChange = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        const product = {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: quantity
        };
        addToCart(product);
    };

    return (
        <div>
        <h3>{item.title}</h3>
        <Description description={item.description} />
        <p>Price: {item.price}</p>
        <ItemQuantitySelector
            quantity={quantity}
            onChange={handleQuantityChange}
        />
        <AddItemButton onClick={handleAddToCart} />
        </div>
    );
    };

export default ItemDetail;

