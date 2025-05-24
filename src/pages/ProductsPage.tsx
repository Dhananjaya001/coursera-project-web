import React, { useState } from 'react';
import { plants, getAllCategories } from '../utils/plantData';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...getAllCategories()];

  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="products-page">
      <Header />
      <div className="products-container">
        <h1 className="page-title">Our Plants Collection</h1>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredPlants.map(plant => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
