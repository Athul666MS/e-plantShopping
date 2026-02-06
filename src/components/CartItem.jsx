import React from 'react';
import { useCart } from '../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-quantity">
                <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, -1)}
                >-</button>
                <span className="qty-value">{item.quantity}</span>
                <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, 1)}
                >+</button>
            </div>
            <div className="cart-item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
                className="delete-btn"
                onClick={() => removeFromCart(item.id)}
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
