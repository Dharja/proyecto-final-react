import React from 'react'
import './CheckoutForm.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import Cart from '../Cart/Cart';



export default function CheckoutForm({ onConfirm }) {
    const [userData, setUserData] = useState({
        nombre: "",
        phone: "",
        email: "",
    });

    function onInputChange(evt) {
        const prop = evt.target.name;
        const value = evt.target.value;

        const newData = { ...userData };
        newData[prop] = value;
        setUserData(newData);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        console.log(userData);
        onConfirm(userData);
    }

    function handleReset(evt) {
        evt.preventDefault();
        setUserData({
            nombre: "",
            phone: "",
            email: "",
        });
    }

    const styleInput = { display: "flex", marginBottom: 24 };
    const label = { width: "100px", marginRight: 4 };

    return (
        <form className="Container" onSubmit={onSubmit}>
            <h2>Ingresar datos para finalizar la compra ✈️</h2>
            <div style={styleInput}>
                <label style= {label}><span style={{ color: 'darkblue', fontWeight: 'bold' }}>Nombre</span></label>
                <input
                    value={userData.nombre}
                    name="nombre"
                    type="text"
                    onChange={onInputChange} />
            </div>
            <div style={styleInput}>
                <label style={label}><span style={{ color: 'darkblue', fontWeight: 'bold' }}>Teléfono</span></label>
                <input
                    value={userData.phone}
                    name="phone"
                    type="text"
                    onChange={onInputChange}
                />
            </div>
            <div style={styleInput}>
                <label style={label}><span style={{ color: 'darkblue', fontWeight: 'bold' }}>Email</span></label>
                <input
                    value={userData.email}
                    name="email"
                    type="text"
                    onChange={onInputChange}
                />
            </div>
            <div>
                <button className="Button2">Crear Orden de compra</button>
            </div>
            <br />
            <div>
                <button className="Button2" onClick={handleReset}>Vaciar Formulario</button>
            </div>
        </form>
    );
}
