import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../components/CartContext';
import Header from '../components/Header';
import './CartPage.css';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart();

  const handleQuantityChange = (plantId: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(plantId, newQuantity);
    }
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <div className="cart-container">
          <div className="empty-cart">
            <ShoppingBag size={80} className="empty-cart-icon" />
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to get started!</p>
            <Link to="/products" className="continue-shopping-button">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <h1 className="page-title">Shopping Cart</h1>
        
        <div className="cart-summary">
          <div className="summary-item">
            <span className="summary-label">Total Items:</span>
            <span className="summary-value">{getTotalItems()}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Total Cost:</span>
            <span className="summary-value">${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
                <p className="cart-item-total">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="quantity-button"
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="quantity-button"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="delete-button"
                  title="Remove from cart"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-button">
            Continue Shopping
          </Link>
          <button onClick={handleCheckout} className="checkout-button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
