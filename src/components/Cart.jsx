import React from 'react';

const Cart = () => {
// Lógica del carrito
    const [cartItems, setCartItems] = useState([]);
    const handleRemoveProduct = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    };

    return (
    <div>
        {cartItems.map((item) => (
        <CartItem
            key={item.id}
            product={item}
            onRemoveProduct={handleRemoveProduct}
        />
        ))}
    </div>
    );
};


export default Cart;