import React, { useState } from 'react';
import { shopPageData } from './shop-page-data';
import Collection from './collection';
function ShopPage(props) {
  const [collectionData] = useState(shopPageData);

  return (
    <div className="shop-page">
      {collectionData.map(({ id, ...otherCollectionProps }) => {
        return <Collection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}

export default ShopPage;
