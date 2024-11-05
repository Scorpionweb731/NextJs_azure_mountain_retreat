import FactSection from '@/app/components/FactSection';
import InstagramSection from '@/app/components/InstagramSection';
import ServiceSection from '@/app/components/ServiceSection';
import WelcomeSection from '@/app/components/WelcomeSection';
import Link from 'next/link';
import React from 'react';
const page = () => {
  return (
    <>
<div className="hero-wrap" style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
<div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div className="text">
	            <p className="breadcrumbs mb-2"><span className="mr-2"><Link href="/">Home</Link></span> <span>About</span></p>
	            <h1 className="mb-4 bread">About Us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
     <FactSection/>

      <WelcomeSection/>

      <ServiceSection/>

      <InstagramSection/>
    </>
  );
};

export default page;
