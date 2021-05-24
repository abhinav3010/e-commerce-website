import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartDropdownItem from './cart-dropdown-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selecter';
import './styles/cart-dropdown.scss';

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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
