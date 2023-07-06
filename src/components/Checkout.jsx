import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

    const Checkout = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [orderNumber, setOrderNumber] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleConfirmEmailChange = (e) => {
        setConfirmEmail(e.target.value);
    };

    const handleCheckout = () => {
        if (email !== confirmEmail) {
            alert("Emails don't match. Please confirm your email again.");
            return;
            }
        
            if (name && lastName && phone && email) {
            const order = {
            name: name,
            lastName: lastName,
            phone: phone,
            email: email,
            products: cart, // Asigna aquí el array de productos del carrito
            date: new Date().toISOString(),
            status: 'pending'
            };
        
            // Guardar la orden en la colección de Firebase
            const db = firebase.firestore();
            db.collection('orders')
                .add(order)
                .then((docRef) => {
                setOrderNumber(docRef.id);
                alert(`Order placed successfully. Order number: ${docRef.id}`);
                })
                .catch((error) => {
                console.error('Error placing order:', error);
                });
            } else {
            alert('Please fill in all the required fields.');
            }
        };
        

    return (
        <div>
        <h2>Checkout</h2>
        {/* Order summary */}
        <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={handleNameChange}
        />
        <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
        />
        <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
        />
        <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
        />
        <input
            type="text"
            placeholder="Confirm Email"
            value={confirmEmail}
            onChange={handleConfirmEmailChange}
        />
        <button onClick={handleCheckout}>Place Order</button>
        {/* Order number feedback */}
        </div>
    );
    };

export default Checkout;
