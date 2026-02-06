import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ plant }) => {
    const { addToCart, cartItems } = useCart();
    const isInCart = cartItems.some(item => item.id === plant.id);

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={plant.image} alt={plant.name} className="product-image" />
                {plant.category && <span className="product-category">{plant.category}</span>}
            </div>
            <div className="product-info">
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-price">${plant.price.toFixed(2)}</p>
                <p className="product-description">{plant.description}</p>
                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(plant)}
                    disabled={false} // Always allow adding more
                >
                    {isInCart ? 'Add More' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
