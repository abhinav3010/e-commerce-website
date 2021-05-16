import React, { useState } from 'react';
import MenuItem from './menu-item';
import { categoryMenuData } from './category-menu-data';
import './styles/category-menu.scss';

const CategoryMenu = (props) => {
  const [categoryItems] = useState(categoryMenuData);

  return (
    <div className="category-menu">
      {categoryItems.map((categoryItem) => (
        <MenuItem
          title={categoryItem.title}
          imgUrl={categoryItem.imageUrl}
          key={categoryItem.id}
          size={categoryItem.size}
        />
      ))}
    </div>
  );
};

export default CategoryMenu;
