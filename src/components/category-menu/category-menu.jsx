import React from 'react';
import MenuItem from './menu-item';
import { connect } from 'react-redux';
import { selectSectionsData } from '../../redux/sections/section-selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './styles/category-menu.scss';

const CategoryMenu = ({ sectionsData, history }) => {
  return (
    <div className="category-menu">
      {sectionsData.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          title={title}
          imgUrl={imageUrl}
          key={id}
          size={size}
          linkUrl={linkUrl}
          history={history}
        />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sectionsData: selectSectionsData,
});

export default withRouter(connect(mapStateToProps)(CategoryMenu));
