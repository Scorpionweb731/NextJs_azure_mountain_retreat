import {FormFields} from '@/Data';
  const BookingSection = () => {
    return (
      <section className="ftco-booking">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form action="#" className="booking-form">
                <div className="row">
                  {FormFields.map((field, index) => (
                    <div className="col-md-3 d-flex" key={index}>
                      <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                        <div className="wrap">
                          <label htmlFor={field.className}>{field.label}</label>
                          {field.type === "text" ? (
                            <input
                              type={field.type}
                              className={`form-control ${field.className}`}
                              placeholder={field.placeholder}
                              required
                            />
                          ) : (
                            <div className="form-field">
                              <div className="select-wrap">
                                <div className="icon">
                                  <span className="ion-ios-arrow-down"></span>
                                </div>
                                <select className={`form-control ${field.className}`} required>
                                  {field.options.map((option, i) => (
                                    <option value={option} key={i}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div className="col-md d-flex">
                    <div className="form-group d-flex align-self-stretch">
                      <input
                        type="submit"
                        value="Check Availability"
                        className="btn btn-primary py-3 px-4 align-self-stretch"
                      />
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BookingSection;
  