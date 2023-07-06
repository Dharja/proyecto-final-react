    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import firebase from 'firebase/app';
    import 'firebase/firestore';

    const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Obtener los productos desde Firebase y establecerlos en el estado
        const fetchItems = async () => {
        try {
            const itemsSnapshot = await db.collection('items').get();
            const itemsData = itemsSnapshot.docs.map((doc) => doc.data());
            setItems(itemsData);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
        };

        fetchItems();
    }, []);

    return (
        <div>
        <h1>Welcome to the E-commerce Store!</h1>
        <ItemList items={items} />
        </div>
    );
    };

    export default ItemListContainer;
