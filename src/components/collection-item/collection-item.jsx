import React from 'react';
import CustomButton from '../custom-button/custom-button';
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
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
}

export default CollectionItem;
