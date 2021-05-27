import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartDropdownItem from './cart-dropdown-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selecter';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdownHidden } from '../../redux/cart/cart-actions';
import './styles/cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartDropdownItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <span className="empty-cart">Your Cart is Empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartDropdownHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
