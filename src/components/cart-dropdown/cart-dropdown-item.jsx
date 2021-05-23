import React from 'react';
import './styles/cart-dropdown-item.scss';

const CartDropdownItem = ({ item: { imageUrl, quantity, price, name } }) => {
  return (
    <div className="cart-dropdown-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <div className="name">{name}</div>
        <div>{`${quantity} x $${price}`}</div>
      </div>
    </div>
  );
};

export default CartDropdownItem;
