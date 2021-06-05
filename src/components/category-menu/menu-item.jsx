import React from 'react';
import './styles/menu-item.scss';

function MenuItem({ title, imgUrl, size, linkUrl, history }) {
  const onSelectItem = () => {
    history.push(`/${linkUrl}`);
  };
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="item-content" onClick={onSelectItem}>
        <div className="item-title">{title.toUpperCase()}</div>
        <div className="item-subtitle">SHOP NOW</div>
      </div>
    </div>
  );
}

export default MenuItem;
