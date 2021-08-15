import React from 'react';
import '../assets/styles/components/Categories/Categories.css';
import Carousel from './Carousel';

const Categories = ({ title }) => {

  return (
    <div className='categories'>
      <h3 className='categories__title'>{title}</h3>
      <Carousel />
    </div>
  );
};

export default Categories;
