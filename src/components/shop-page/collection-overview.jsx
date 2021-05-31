import React, { Fragment } from 'react';
import Collection from './collection';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop-selectors';

const CollectionOverview = ({ collections }) => {
  return (
    <Fragment>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <Collection key={id} {...otherCollectionProps} itemCount={4} />;
      })}
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
