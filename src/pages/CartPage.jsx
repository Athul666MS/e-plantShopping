import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, totalItems, totalCost } = useCart();

    const handleCheckout = () => {
        alert('Coming Soon');
    };

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h2>Your Shopping Cart</h2>
                <div className="divider-left"></div>

                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is empty.</p>
                        <Link to="/products">
                            <button className="continue-shopping-btn">Start Shopping</button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="cart-summary-top">
                            <p>Total Plants: <strong>{totalItems}</strong></p>
                            <p>Total Cost: <strong>${totalCost.toFixed(2)}</strong></p>
                        </div>

                        <div className="cart-items-list">
                            {cartItems.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        <div className="cart-actions">
                            <Link to="/products">
                                <button className="continue-shopping-btn">Continue Shopping</button>
                            </Link>
                            <div className="checkout-section">
                                <p className="total-label">Total: ${totalCost.toFixed(2)}</p>
                                <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;
