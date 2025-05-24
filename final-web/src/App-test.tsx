import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import './App.css'

// Simple test components
const TestLanding = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1>Paradise Nursery</h1>
    <p>Welcome to our nursery!</p>
    <a href="/products" style={{ padding: '10px 20px', background: '#4a7c59', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
      Get Started
    </a>
  </div>
);

const TestProducts = () => (
  <div style={{ padding: '20px' }}>
    <h1>Products Page</h1>
    <p>This is the products page</p>
  </div>
);

const TestCart = () => (
  <div style={{ padding: '20px' }}>
    <h1>Cart Page</h1>
    <p>This is the cart page</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<TestLanding />} />
            <Route path="/products" element={<TestProducts />} />
            <Route path="/cart" element={<TestCart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
