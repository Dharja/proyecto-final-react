import React from "react";
import "./CartWidget.css";
import cart from './assets/Carrito.svg'
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



export default function CartWidget() {
    const {countItems } = useContext(cartContext);           

    return (
        <Link to='/cart' className="cart-widget" style={{ display: countItems() > 0 ? "block" : " none" }} >
            <img className="cart-widget-img" src={cart} alt="carrito" />
            <span className="cart-widget-count">{countItems()}</span>
        </Link>
    );

} 
