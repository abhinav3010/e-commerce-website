import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './styles/collection.scss';

function Collection({ title, items }) {
  return (
    <div className="collection">
      <div className="collection-title">{title}</div>
      <div className="collection-content">
        {items.slice(0, 4).map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Collection;
