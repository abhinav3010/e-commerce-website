import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './styles/collection.scss';

function Collection({ title, items }) {
  return (
    <div className="collection">
      <div className="collection-title">{title}</div>
      <div className="collection-content">
        {items.slice(0, 4).map(({ id, ...otherItemProps }) => {
          return <CollectionItem key={id} {...otherItemProps} />;
        })}
      </div>
    </div>
  );
}

export default Collection;
