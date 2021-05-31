import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop-selectors';
import Collection from '../shop-page/collection';

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <Collection {...collection} itemCount={collection.items.length} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log('Abhinav', ownProps);
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default withRouter(connect(mapStateToProps)(CollectionPage));
