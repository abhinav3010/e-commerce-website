import React from 'react';
import MenuItem from './menu-item';
import { connect } from 'react-redux';
import { selectSectionsData } from '../../redux/sections/section-selectors';
import { createStructuredSelector } from 'reselect';
import './styles/category-menu.scss';

const CategoryMenu = ({ sectionsData }) => {
  return (
    <div className="category-menu">
      {sectionsData.map(({ title, imageUrl, id, size }) => (
        <MenuItem title={title} imgUrl={imageUrl} key={id} size={size} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sectionsData: selectSectionsData,
});

export default connect(mapStateToProps)(CategoryMenu);
