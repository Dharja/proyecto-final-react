import { createContext, useState, useEffect } from "react";
import './CartContext.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


// creamos contexto q contendrá el estado del carrito de compras. Exportamos el CartContext para que pueda ser utilizado por otros componentes

export const cartContext = createContext({ cart: [] });


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart);


    function addItem(item, quantity) {
        const newCart = [...cart];

        if (isInCart(item.id)) {
            setCart(
                cart.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: cartItem.quantity + quantity };
                    } else {
                        return { ...cartItem };
                    };
                })
            );
        } else {
            newCart.push({ ...item, quantity });
            setCart(newCart);
        };
    };


    function getItem(id) {
        const itemBuscado = cart.find((item) => item.id === id);
        return itemBuscado;
    };


    function countItems() {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };


    function countTotalPrice() {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    // Remueve un item del Cart usando su ID
    function removeItem(idDelete) {
        setCart(cart.filter((item) => item.id !== idDelete));
    };


    // FUNCION PARA LIMPIAR EL CARRITO DESPUES DE LA COMPRA
    const clearCart = () => {
        setCart([]);
    };


    const handleCheckout = () => {
        Swal.fire({
            icon: 'info',
            title: 'Finalizacion de la compra',
            text: 'Ud está siendo redirigido al cierre de la compra',
            showConfirmButton: false,
            timer: 3000,
        });
    };



    const isInCart = (itemId) => {                                    // True /  False
        return cart.some(prod => prod.id === itemId)
    };


    return (
        <cartContext.Provider value={{ cart, setCart, addItem, countItems, getItem, removeItem, clearCart, handleCheckout, countTotalPrice, isInCart }}>
            <div className="cart-container">
                {children}
            </div>
        </cartContext.Provider>
    );
};


