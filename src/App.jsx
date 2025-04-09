import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = ({ products: initialProducts }) => {
  const defaultProducts = [
    { id: 1, name: "Laptop", price: 999.99, inStock: true },
    { id: 2, name: "Smartphone", price: 699.99, inStock: false },
    { id: 3, name: "Headphones", price: 199.99, inStock: true },
    { id: 4, name: "Keyboard", price: 49.99, inStock: false },
  ];

  const products = initialProducts || defaultProducts;

  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState('all');

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>

      {/* Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
      </button>

      {/* Category Filter */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product List */}
      <ProductList products={products} category={category} />
    </div>
  );
};

export default App;