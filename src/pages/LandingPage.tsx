import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, where green dreams come to life! We are your premier destination for 
            exceptional houseplants and garden essentials. Whether you're a seasoned plant parent or just beginning 
            your green journey, we offer a carefully curated collection of vibrant, healthy plants that will 
            transform your home into a lush paradise. From air-purifying indoor plants to stunning outdoor varieties, 
            each plant is hand-selected for quality and vitality. Let us help you create your own slice of paradise, 
            one plant at a time.
          </p>
          <Link to="/products" className="get-started-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
