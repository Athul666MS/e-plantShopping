import { HashRouter, Routes, Route } from 'react-router-dom';
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
