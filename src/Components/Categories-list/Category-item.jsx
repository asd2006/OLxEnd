import React from 'react';
import "./Category-item.scss"
import { Link } from 'react-router-dom';

const CategoryItem = ({img, title, id}) => {
  return (
    <Link to={`/category/${id}`} className='category'>
      <img className='category__item-img' src={img} alt="" />
      <h2 className='category__item-heading'>{title }</h2>
    </Link>
  );
}

export default CategoryItem;
