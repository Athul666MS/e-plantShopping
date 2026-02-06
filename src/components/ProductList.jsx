import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const ProductList = () => {
    const dispatch = useDispatch();

    // Get cart items from Redux store
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total cart quantity using reduce
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Track which plants have been added to cart
    const [addedToCart, setAddedToCart] = useState({});

    // Plant data organized by categories (3 categories, 6+ plants each)
    const plantCategories = {
        'Indoor Plants': [
            {
                id: 1,
                name: 'Snake Plant',
                price: 15.99,
                image: 'https://images.unsplash.com/photo-1593482892290-e67d043e2c61?w=400'
            },
            {
                id: 2,
                name: 'Monstera Deliciosa',
                price: 29.99,
                image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
            },
            {
                id: 3,
                name: 'Pothos',
                price: 12.99,
                image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=400'
            },
            {
                id: 4,
                name: 'Peace Lily',
                price: 18.99,
                image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400'
            },
            {
                id: 5,
                name: 'Rubber Plant',
                price: 24.99,
                image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=400'
            },
            {
                id: 6,
                name: 'Fiddle Leaf Fig',
                price: 45.99,
                image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400'
            }
        ],
        'Outdoor Plants': [
            {
                id: 7,
                name: 'Lavender',
                price: 14.99,
                image: 'https://images.unsplash.com/photo-1611912902955-0e3b478f9367?w=400'
            },
            {
                id: 8,
                name: 'Rose Bush',
                price: 28.99,
                image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400'
            },
            {
                id: 9,
                name: 'Hibiscus',
                price: 22.99,
                image: 'https://images.unsplash.com/photo-1597868165956-03a6827955b1?w=400'
            },
            {
                id: 10,
                name: 'Fern',
                price: 16.99,
                image: 'https://images.unsplash.com/photo-1585662875398-c469fd3d14a8?w=400'
            },
            {
                id: 11,
                name: 'Bamboo Palm',
                price: 32.99,
                image: 'https://images.unsplash.com/photo-1559479083-f3f08c2e3f94?w=400'
            },
            {
                id: 12,
                name: 'Jasmine',
                price: 19.99,
                image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=400'
            }
        ],
        'Succulents': [
            {
                id: 13,
                name: 'Aloe Vera',
                price: 14.99,
                image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
            },
            {
                id: 14,
                name: 'Jade Plant',
                price: 17.99,
                image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400'
            },
            {
                id: 15,
                name: 'Echeveria',
                price: 11.99,
                image: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=400'
            },
            {
                id: 16,
                name: 'Haworthia',
                price: 13.99,
                image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=400'
            },
            {
                id: 17,
                name: 'String of Pearls',
                price: 20.99,
                image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400'
            },
            {
                id: 18,
                name: 'Cactus Mix',
                price: 15.99,
                image: 'https://images.unsplash.com/photo-1493957988430-a5f2e15f49f1?w=400'
            }
        ]
    };

    const handleAddToCart = (plant) => {
        // Dispatch addItem to Redux
        dispatch(addItem({
            id: plant.id,
            name: plant.name,
            price: plant.price,
            image: plant.image
        }));

        // Mark plant as added to cart
        setAddedToCart(prev => ({
            ...prev,
            [plant.name]: true
        }));
    };

    return (
        <div className="product-list-page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <h1>🌿 Paradise Nursery</h1>
                    </div>
                    <ul className="navbar-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Plants</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="cart-link">
                                <span className="cart-icon">🛒</span>
                                <span className="cart-count">{totalItems}</span>
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Product List by Category */}
            <div className="product-list">
                <h2 className="main-title">Our Plant Collection</h2>

                {Object.entries(plantCategories).map(([category, plants]) => (
                    <div key={category} className="category-section">
                        <h3 className="category-heading">{category}</h3>
                        <div className="products-grid">
                            {plants.map((plant) => (
                                <div key={plant.id} className="product-card">
                                    <div className="product-image-wrapper">
                                        <img src={plant.image} alt={plant.name} className="product-image" />
                                    </div>
                                    <div className="product-info">
                                        <h4 className="product-name">{plant.name}</h4>
                                        <div className="product-footer">
                                            <span className="product-price">${plant.price.toFixed(2)}</span>
                                            <button
                                                className="add-to-cart-btn"
                                                onClick={() => handleAddToCart(plant)}
                                                disabled={addedToCart[plant.name]}
                                            >
                                                {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

