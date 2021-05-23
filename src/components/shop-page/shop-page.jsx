import React, { useState } from 'react';
import { SHOP_PAGE_DATA } from './shop-page-data';
import Collection from './collection';
function ShopPage(props) {
  const [collectionData] = useState(SHOP_PAGE_DATA);

  return (
    <div className="shop-page">
      {collectionData.map(({ id, ...otherCollectionProps }) => {
        return <Collection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}

export default ShopPage;
