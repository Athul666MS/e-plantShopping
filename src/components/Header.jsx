import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const { totalItems } = useCart();

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <div className="logo-icon">🌿</div>
                    <div className="logo-text">
                        <h3>Paradise Nursery</h3>
                        <p>Where Green Meets Serenity</p>
                    </div>
                </Link>
            </div>
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/products" className="nav-link">Products</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/cart" className="cart-link">
                    <span className="cart-icon">🛒</span>
                    {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                </Link>
            </nav>
        </header>
    );
};

export default Header;
