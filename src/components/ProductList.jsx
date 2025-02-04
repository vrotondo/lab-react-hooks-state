import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', inStock: false },
]

const ProductList = () => {
  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Replace sample data with dynamic product list */}
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
