import React from 'react';
import './CartItem.css';
import Ciudades from '../../data/Ciudades';
import Carousel from '../Carrusel/Carrusel';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { createOrderWithStockUpdate } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';



const CartItem = ({ id, nombre, pais, imagen, precioPasaje, quantity, moneda, idioma }) => {

  const precio = parseFloat(precioPasaje);
  const cantidad = parseInt(quantity);
  const subtotal = isNaN(precio) || isNaN(cantidad) ? 0 : precio * cantidad;

  const formattedPrecioPasaje = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(precio);



  return (
    <div className="CartItem">
      <h4 style={{ color: 'greenyellow', fontWeight: 'bold' }}>Destino: {nombre}</h4>
      <img src={imagen} className="Miniatura" alt="Miniatura" />
      <p><span style={{ color: 'yellow', fontWeight: 'bold' }}>País:</span > <span style={{ color: 'white', fontWeight: 'normal'}}>{pais}</span></p>
      <br />
      <p><span style={{ color: 'yellow', fontWeight: 'bold' }}>Moneda:</span> <span style={{ color: 'white', fontWeight: 'normal'}}>{moneda}</span></p>
      <br />
      <p><span style={{ color: 'yellow', fontWeight: 'bold' }}>Idioma:</span> <span style={{ color: 'white', fontWeight: 'normal'}}>{idioma}</span></p>
      <br />
      <p><span style={{ color: 'yellow', fontWeight: 'bold' }}>Precio:</span> <span style={{ color: 'white', fontWeight: 'normal'}}>{formattedPrecioPasaje}</span></p>
      <br />
      <p><span style={{ color: 'yellow', fontWeight: 'bold' }}>Cantidad:</span><span style={{ color: 'white', fontWeight: 'normal'}}>{quantity}</span> </p>
      <p><span style={{ color: 'yellow', fontWeight: 'bold' }}>Subtotal:</span> <span style={{ color: 'white', fontWeight: 'normal'}}>{subtotal.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })}</span></p>
    </div>
  );
};


export default CartItem;
