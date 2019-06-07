import React from 'react';
import Button from '../template/Button';
import { Link } from '../../routes'
const imageDirectory = process.env.IMAGE_DIRECTORY

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.product_id}`}>
      <a href={`/product/${product.product_id}`} className="col-lg-3 product-card product-link">
        <div className="thumbnail" style={{backgroundImage: `url(${imageDirectory}${product.thumbnail})`}}>
        </div>
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
        <div className="txt-align mt-4">
        <button className="btn product-btn-cart">Buy Now </button>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;