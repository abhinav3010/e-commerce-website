import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import CollectionOverview from './collection-overview';
import CollectionPage from '../collection-page/collection-page';

function ShopPage({ match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionOverview />
      </Route>
      <Route exact path={`${match.path}/:collectionId`}>
        <CollectionPage />
      </Route>
    </div>
  );
}

export default withRouter(ShopPage);
