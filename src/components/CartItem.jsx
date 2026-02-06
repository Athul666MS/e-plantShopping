import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/CartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.id));
        }
    };

    const handleRemove = () => {
        dispatch(removeItem(item.id));
    };

    // Calculate item total
    const itemTotal = (item.price * item.quantity).toFixed(2);

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-quantity">
                <button
                    className="qty-btn"
                    onClick={handleDecrement}
                    aria-label="Decrease quantity"
                >
                    −
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                    className="qty-btn"
                    onClick={handleIncrement}
                    aria-label="Increase quantity"
                >
                    +
                </button>
            </div>
            <div className="cart-item-total">
                <p className="total-label">Total:</p>
                <p className="total-amount">${itemTotal}</p>
            </div>
            <button
                className="delete-btn"
                onClick={handleRemove}
                aria-label="Remove item from cart"
            >
                🗑️ Remove
            </button>
        </div>
    );
};

export default CartItem;
