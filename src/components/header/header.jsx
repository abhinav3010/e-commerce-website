import React from 'react';
import './styles/header.scss';
import LogoImageUrl from '../../assets/crown.svg';
import { Link } from 'react-router-dom';

function Header(props) {
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
      </div>
    </div>
  );
}

export default Header;
