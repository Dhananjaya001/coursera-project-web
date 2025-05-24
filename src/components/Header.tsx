import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Store } from 'lucide-react';
import { useCart } from './CartContext';
import './Header.css';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <Store className="logo-icon" />
          Paradise Nursery
        </Link>
        
        <nav className="nav">
          {location.pathname !== '/' && (
            <Link to="/" className="nav-link">
              <Home size={20} />
              Home
            </Link>
          )}
          
          {location.pathname !== '/products' && (
            <Link to="/products" className="nav-link">
              <Store size={20} />
              Products
            </Link>
          )}
          
          {location.pathname !== '/cart' && (
            <Link to="/cart" className="nav-link cart-link">
              <ShoppingCart size={20} />
              Cart
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
