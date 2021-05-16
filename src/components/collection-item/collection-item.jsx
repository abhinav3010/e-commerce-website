import React from 'react';
import './styles/collection-item.scss';

function CollectionItem(props) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="item-footer">
        <div className="item-name">{props.name}</div>
        <div className="item-price">{props.price}</div>
      </div>
    </div>
  );
}

export default CollectionItem;
