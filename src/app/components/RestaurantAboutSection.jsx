import {RestaurantAboutData} from '@/Data'

function RestaurantAboutSection(){
    return(
        <>
        <section className="ftco-section ftc-no-pb ftc-no-pt">
      <div className="container">
        <div className="row">
          <div
            className="col-md-5 p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center"
            style={{ backgroundImage: 'url(images/about.jpg)' }}
          />
          <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
            <div className="heading-section heading-section-wo-line pt-md-4 mb-5">
              <span className="subheading">{RestaurantAboutData.subheading}</span>
              <h2 className="mb-4">{RestaurantAboutData.title}</h2>
            </div>
            <div className="pb-md-4">
              {RestaurantAboutData.paragraphs.map((text, index) => (
                <p key={index} className={index === 1 ? "pl-md-5" : ""}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}
export default RestaurantAboutSection