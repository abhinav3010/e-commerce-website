import React from 'react';
import CheckoutItem from './checkout-item';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart-selecter';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './styles/checkout-page.scss';

const CheckoutPage = ({ cartTotal, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">{`Total: $${cartTotal}`}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
