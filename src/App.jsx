import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <HashRouter>
      <CartProvider>
        <div className="app-container">
          <Header />
          <div className="landing-page">
            <div className="landing-content">
              <h1>e-plantShopping</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <p className="description">
                Welcome to e-plantShopping, your one-stop destination for beautiful houseplants.
                We offer a wide variety of indoor and outdoor plants to bring nature into your home.
                Explore our collection and find the perfect plant for your space.
              </p>
              <Link to="/products">
                <button className="get-started-btn">Get Started</button>
              </Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </CartProvider>
    </HashRouter>
  );
}

export default App;
