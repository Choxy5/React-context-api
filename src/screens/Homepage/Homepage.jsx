import React from 'react';
import products from '../../data';
import './Homepage.css';
import ProductCard from '../../components/ProductCard/ProductCard';

function Homepage() {
  return (
    <div className="products__wrapper">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Homepage;
