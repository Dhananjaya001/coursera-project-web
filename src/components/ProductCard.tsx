import React, { useState } from 'react';
import type { Plant } from '../types';
import { useCart } from './CartContext';
import './ProductCard.css';

interface ProductCardProps {
  plant: Plant;
}

const ProductCard: React.FC<ProductCardProps> = ({ plant }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(plant);
    setIsAdded(true);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={plant.image} alt={plant.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-price">${plant.price.toFixed(2)}</p>
        {plant.description && (
          <p className="product-description">{plant.description}</p>
        )}
        <button 
          onClick={handleAddToCart} 
          className={`add-to-cart-button ${isAdded ? 'disabled' : ''}`}
          disabled={isAdded}
        >
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
