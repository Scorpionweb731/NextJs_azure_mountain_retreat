import React from 'react';
import { SliderData } from '@/Data';
const Slider = () => {
  return (
    <section className="home-slider owl-carousel">
      {SliderData.map((slide, index) => (
        <div 
          key={index} 
          className="slider-item" 
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-12 ftco-animate text-center">
                <div className="text mb-5 pb-3">
                  <h1 className="mb-3">{slide.title}</h1>
                  <h2>{slide.subtitle}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Slider;
