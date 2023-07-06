    import React from 'react';
    import { Link } from 'react-router-dom';

    const NavBar = () => {
    return (
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
            <li>
            <CategoryMenu />
            </li>
        </ul>
        </nav>
    );
    };

    <button onClick={() => handleCategorySelect(categoryId)}>Categoría 1</button>

    export default NavBar;
