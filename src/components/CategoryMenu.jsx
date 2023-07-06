import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase, { FirebaseError } from 'firebase/app';
import 'firebase/firestore';

const CategoryMenu = () => {
const [categories, setCategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState(null);

const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  

useEffect(() => {
    // Obtener las categorías desde Firebase y establecerlas en el estado
    const fetchCategories = async () => {
    try {
        const categoriesSnapshot = await db.collection('categories').get();
        const categoriesData = categoriesSnapshot.docs.map((doc) => doc.data());
        setCategories(categoriesData);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
    };

    fetchCategories();
}, []);

return (
    <div>
    <span>Categories:</span>
    <ul>
        {categories.map((category) => (
        <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.description}</Link>
        </li>
        ))}
    </ul>
    </div>
);
};

export default CategoryMenu;
