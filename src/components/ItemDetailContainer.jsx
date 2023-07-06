import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

    const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Obtener el producto específico desde Firebase y establecerlo en el estado
        const fetchItem = async () => {
        try {
            const itemDoc = await db.collection('items').doc(id).get();
            const itemData = itemDoc.data();
            setItem(itemData);
        } catch (error) {
            console.error('Error fetching item:', error);
        }
        };

        fetchItem();
    }, [id]);

    return (
        <div>
        {item ? (
            <ItemDetail item={item} />
        ) : (
            <p>Product not found.</p>
        )}
        </div>
    );
    };

export default ItemDetailContainer;
