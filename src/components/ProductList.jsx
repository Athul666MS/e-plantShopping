import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const ProductList = () => {
    const dispatch = useDispatch();

    // Sample plant products data
    const plants = [
        {
            id: 1,
            name: 'Snake Plant',
            price: 15.99,
            image: 'https://images.unsplash.com/photo-1593482892290-e67d043e2c61?w=400',
            description: 'Low maintenance, air purifying plant'
        },
        {
            id: 2,
            name: 'Monstera Deliciosa',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400',
            description: 'Beautiful tropical plant with split leaves'
        },
        {
            id: 3,
            name: 'Pothos',
            price: 12.99,
            image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=400',
            description: 'Easy to grow trailing plant'
        },
        {
            id: 4,
            name: 'Fiddle Leaf Fig',
            price: 45.99,
            image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400',
            description: 'Statement plant with large glossy leaves'
        },
        {
            id: 5,
            name: 'Peace Lily',
            price: 18.99,
            image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400',
            description: 'Elegant flowering plant, air purifier'
        },
        {
            id: 6,
            name: 'Rubber Plant',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=400',
            description: 'Hardy plant with shiny dark green leaves'
        },
        {
            id: 7,
            name: 'ZZ Plant',
            price: 21.99,
            image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400',
            description: 'Drought tolerant, perfect for beginners'
        },
        {
            id: 8,
            name: 'Aloe Vera',
            price: 14.99,
            image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
            description: 'Succulent with healing properties'
        },
        {
            id: 9,
            name: 'Spider Plant',
            price: 11.99,
            image: 'https://images.unsplash.com/photo-1572688484409-d0d1e0897c04?w=400',
            description: 'Fast growing, produces baby plants'
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem({
            id: plant.id,
            name: plant.name,
            price: plant.price,
            image: plant.image,
            description: plant.description
        }));
    };

    return (
        <div className="product-list">
            <h2>Our Plant Collection</h2>
            <div className="products-grid">
                {plants.map((plant) => (
                    <div key={plant.id} className="product-card">
                        <div className="product-image-wrapper">
                            <img src={plant.image} alt={plant.name} className="product-image" />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{plant.name}</h3>
                            <p className="product-description">{plant.description}</p>
                            <div className="product-footer">
                                <span className="product-price">${plant.price.toFixed(2)}</span>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => handleAddToCart(plant)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
