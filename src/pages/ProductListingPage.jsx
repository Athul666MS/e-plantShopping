import React from 'react';
import { plants } from '../data/plants';
import ProductCard from '../components/ProductCard';
import './ProductListingPage.css';

const ProductListingPage = () => {
    // Get unique categories
    const categories = [...new Set(plants.map(plant => plant.category))];

    return (
        <div className="product-listing-page">
            <div className="products-container">
                {categories.map(category => (
                    <div key={category} className="category-section">
                        <h2 className="category-title">{category} Plants</h2>
                        <div className="divider-left"></div>
                        <div className="product-grid">
                            {plants
                                .filter(plant => plant.category === category)
                                .map(plant => (
                                    <ProductCard key={plant.id} plant={plant} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
