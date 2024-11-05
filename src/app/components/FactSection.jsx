import { FactData } from '@/Data';

function FactSection() {
  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{ backgroundImage: "url('images/bg_1.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              {FactData.map((counter) => (
                <div key={counter.id} className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={counter.number}>0</strong>
                      <span>{counter.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FactSection;
