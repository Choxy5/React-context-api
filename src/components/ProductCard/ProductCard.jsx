import React, { useContext } from 'react';
import './ProductCard.css';
import formatCurrency from 'format-currency';
import Rating from '.././Rating/Rating';
import CartContext from '../context/cart/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  let opts = { format: '%s%v', symbol: '€' };

  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="productCard__price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
      </div>
      <div className="productCard__Rating">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </div>
      <button
        onClick={() => {
          addToCart(product);
        }}
        className="productCard__button"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default ProductCard;
