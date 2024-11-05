import {MenuItems} from '@/Data'
function MenuSection(){
    return (
<>
    <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2>Our Menu</h2>
            </div>
          </div>
          <div className="row">
            {MenuItems.map((item, index) => (
              <div className="col-md-6" key={index}>
                <div className="pricing-entry d-flex ftco-animate">
                  <div className="img" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="desc pl-3">
                    <div className="d-flex text align-items-center">
                      <h3><span>{item.title}</span></h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <div className="d-block">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</>
    )
}
export default MenuSection