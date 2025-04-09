import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, category }) => {
  const filteredProducts = products.filter((product) => {
    if (category === 'all') return true;
    return product.category === category;
  });

  return (
    <>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </>
  );
};

export default ProductList;