import React from 'react';
import './styles/header.scss';
import LogoImageUrl from '../../assets/crown.svg';
import ShoppingCart from '../shopping-cart/shopping-cart';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

function Header({ currentUser, isDropdownHidden }) {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <img src={LogoImageUrl} alt="" />
        </div>
      </Link>

      <div className="options">
        <div className="option">
          <Link to="/shop">SHOP</Link>
        </div>
        <div className="option">
          <Link to="/contact">CONTACT</Link>
        </div>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <div className="option">
            <Link to="/signin">SIGN IN</Link>
          </div>
        )}
        <ShoppingCart />
      </div>
      {isDropdownHidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isDropdownHidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
