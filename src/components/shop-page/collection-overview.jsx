import React, { Fragment } from 'react';
import Collection from './collection';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionData } from '../../redux/shop/shop-selectors';

const CollectionOverview = ({ collectionData }) => {
  return (
    <Fragment>
      {collectionData.map(({ id, ...otherCollectionProps }) => {
        return <Collection key={id} {...otherCollectionProps} />;
      })}
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  collectionData: selectCollectionData,
});

export default connect(mapStateToProps)(CollectionOverview);
