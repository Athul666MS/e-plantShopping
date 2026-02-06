import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1>About Paradise Nursery</h1>
                <div className="divider-left"></div>

                <section className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        Paradise Nursery was founded with a simple mission: to bring the beauty and tranquility
                        of nature into every home. We believe that houseplants are more than just decorations—they're
                        living companions that purify the air, reduce stress, and create a sense of peace in our
                        busy lives.
                    </p>
                </section>

                <section className="about-section">
                    <h2>What We Offer</h2>
                    <p>
                        Our carefully curated collection features a diverse range of houseplants, from low-maintenance
                        succulents perfect for beginners to statement tropical plants for experienced plant parents.
                        Each plant is selected for its quality, health, and ability to thrive in various home environments.
                    </p>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon">🌱</span>
                            <h3>Quality Plants</h3>
                            <p>Healthy, well-cared-for plants from trusted growers</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">💚</span>
                            <h3>Expert Guidance</h3>
                            <p>Care tips and support for every plant lover</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🏡</span>
                            <h3>Home Delivery</h3>
                            <p>Safe packaging and delivery right to your door</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Our Commitment</h2>
                    <p>
                        We're committed to sustainable practices and eco-friendly packaging. Every purchase supports
                        our mission to make the world a greener place, one plant at a time. We also believe in giving
                        back to our community through educational workshops and plant care resources.
                    </p>
                </section>

                <section className="about-section cta-section">
                    <h2>Join Our Green Community</h2>
                    <p>
                        Whether you're a seasoned plant enthusiast or just starting your green journey,
                        Paradise Nursery is here to help you create your own indoor oasis.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
