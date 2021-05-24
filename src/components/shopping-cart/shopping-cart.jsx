import React from 'react';
import './styles/shopping-cart.scss';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdownHidden } from '../../redux/cart/cart-actions';
import { selectItemCount } from '../../redux/cart/cart-selecter';
import { connect } from 'react-redux';

const ShoppingCart = ({ toggleCartDropdownHidden, itemCount }) => {
  return (
    <div className="shopping-cart" onClick={toggleCartDropdownHidden}>
      <ShoppingBagIcon className="shopping-bag-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
