import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fullShop.css';

const ShopCard = ({ product, addToCart, removeFromCart, cart }) => {
  return (
    <div className="col-md-4 mb-4 d-flex justify-content-center">
      <div className="shop-card card">
        <div className="card-img-container">
          <img src={product.image} className="shop-card-image" alt={product.name} />
          <div className="card-img-overlay shop-card-img-overlay"></div>
        </div>
        <div className="card-body d-flex flex-column align-items-center text-center full-Shop-card-title">
          <h5 className="card-title full-Shop-card-title mb-2">{product.name}</h5>
          <p className="card-text mb-3">₹{product.price}</p>
          <div className="d-flex justify-content-center w-100">
            <button className="btn btn-primary mr-2" onClick={() => addToCart(product.id)}>Add to Cart</button>
            {cart[product.id] && (
              <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
