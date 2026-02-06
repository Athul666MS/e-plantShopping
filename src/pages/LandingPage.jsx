import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1>Welcome To Paradise Nursery</h1>
                <div className="divider"></div>
                <p>
                    Where Green Meets Serenity
                </p>
                <p className="description">
                    At Paradise Nursery, we are passionate about bringing nature closer to you.
                    Our mission is to provide a wide range of high-quality houseplants that not only
                    enhance the beauty of your home but also contribute to a healthier and more
                    peaceful living environment. Explore our collection of indoor and outdoor plants,
                    carefully curated to suit every space and lifestyle.
                </p>
                <Link to="/products">
                    <button className="get-started-btn">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
