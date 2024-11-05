import Slider from './components/Slider'
import BookingSection from './components/BookingSection';
import WelcomeSection from './components/WelcomeSection';
import ServiceSection from './components/ServiceSection';
import RoomsSection from './components/RoomsSection';
import FactSection from './components/FactSection';
import TestimonialSection from './components/TestimonialSection';
import BlogSection from './components/BlogSection';
import InstagramSection from './components/InstagramSection';

export default function Home() {
   
  return (
   <>
   {/* slider */}
     <Slider/>

{/* check in */}
    <BookingSection/>

{/* welcome section */}
<WelcomeSection/>

 {/* services section */}
		<ServiceSection/>

 {/* rooms section */}
<RoomsSection/>

{/* facts */}
<FactSection/>

{/* testimonials */}
<TestimonialSection/>

{/* blogsection */}
<BlogSection/>

{/* instagram  */}
<InstagramSection/>


   </>
  );
}
