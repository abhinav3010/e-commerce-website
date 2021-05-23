import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart-actions';
import { connect } from 'react-redux';
import './styles/collection-item.scss';

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="item-footer">
        <div className="item-name">{name}</div>
        <div className="item-price">{`$${price}`}</div>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
