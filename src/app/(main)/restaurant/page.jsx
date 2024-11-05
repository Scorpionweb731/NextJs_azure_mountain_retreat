import InstagramSection from '@/app/components/InstagramSection'
import MenuSection from '@/app/components/MenuSection'
import RestaurantAboutSection from '@/app/components/RestaurantAboutSection'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
   <div>
  <div className="hero-wrap" style={{backgroundImage: 'url("images/bg_1.jpg")'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
        <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          <div className="text">
            <p className="breadcrumbs mb-2"><span className="mr-2"><Link href="/">Home</Link></span> <span>Restaurants</span></p>
            <h1 className="mb-4 bread">Restaurants</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RestaurantAboutSection/>
  <MenuSection/>
 <InstagramSection/>
</div>

    </>
  )
}

export default page