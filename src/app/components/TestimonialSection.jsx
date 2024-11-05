import {TestimonialsData} from '@/Data'

function TestimonialSection() {
    return (
      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 ftco-animate">
              <div className="row ftco-animate">
                <div className="col-md-12">
                  <div className="carousel-testimony owl-carousel ftco-owl">
                    {TestimonialsData.map((testimonial) => (
                      <div key={testimonial.id} className="item">
                        <div className="testimony-wrap py-4 pb-5">
                          <div
                            className="user-img mb-4"
                            style={{ backgroundImage: `url(${testimonial.image})` }}
                          >
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="icon-quote-left"></i>
                            </span>
                          </div>
                          <div className="text text-center">
                            <p className="mb-4">{testimonial.text}</p>
                            <p className="name">{testimonial.name}</p>
                            <span className="position">{testimonial.position}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default TestimonialSection;