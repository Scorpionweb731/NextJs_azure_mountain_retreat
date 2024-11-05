import React from 'react';
import {Services} from '@/Data';
// ServiceCard Component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
      <div className="media block-6 services py-4 d-block text-center">
        <div className="d-flex justify-content-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className={icon}></span>
          </div>
        </div>
        <div className="media-body p-2 mt-2">
          <h3 className="heading mb-3">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

// Main ServiceSection Component
const ServiceSection = () => {

  return (
    <section className="ftco-section">
      <div className="container">
         <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">{Services.heading}</h2>
            <p className='py-2'>{Services.about}</p>
          </div>
        </div>
        <div className="row d-flex">
          {Services.service.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
