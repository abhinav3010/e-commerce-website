import React from 'react';
import './styles/menu-item.scss';

function MenuItem({ title, imgUrl, size }) {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="item-content">
        <div className="item-title">{title.toUpperCase()}</div>
        <div className="item-subtitle">SHOP NOW</div>
      </div>
    </div>
  );
}

export default MenuItem;
