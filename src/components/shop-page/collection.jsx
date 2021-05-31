import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './styles/collection.scss';

function Collection({ title, items, itemCount }) {
  return (
    <div className="collection">
      <div className="collection-title">{title}</div>
      <div className="collection-content">
        {items.slice(0, itemCount).map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Collection;
