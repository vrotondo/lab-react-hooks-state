import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <>
      <div
        className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
      >
        <h2>{product.name}</h2>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>

        {/* Disable the button if the product is out of stock */}
        <button disabled={!product.inStock}>
          {product.inStock ? 'Add to Cart' : 'Unavailable'}
        </button>
      </div>
    </>
  );
};

export default ProductCard;