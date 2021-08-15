import React from 'react';
import '../assets/styles/components/CarouselItem/CarouselItem.css';
import CarouselItem from './CarouselItem';

const Carousel = () => {

  return (
    <section className='carousel'>
      <div className='carousel__container'>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
    </section>
  );
};

export default Carousel;
