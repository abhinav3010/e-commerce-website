import React from 'react';
import './styles/shopping-cart.scss';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdownHidden } from '../../redux/cart/cart-actions';
import { connect } from 'react-redux';

const ShoppingCart = ({ toggleCartDropdownHidden }) => {
  return (
    <div className="shopping-cart" onClick={toggleCartDropdownHidden}>
      <ShoppingBagIcon className="shopping-bag-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden()),
});

export default connect(null, mapDispatchToProps)(ShoppingCart);
