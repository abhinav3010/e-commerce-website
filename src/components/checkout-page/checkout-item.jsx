import React from 'react';
import './styles/checkout-item.scss';

const CheckoutItem = ({ item: { imageUrl, price, quantity, name } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">{price}</div>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
