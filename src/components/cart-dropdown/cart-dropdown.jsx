import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import './styles/cart-dropdown.scss';
import CartDropdownItem from './cart-dropdown-item';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartDropdownItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
