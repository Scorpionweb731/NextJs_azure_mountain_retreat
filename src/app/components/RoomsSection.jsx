import {RoomsData} from '@/Data';
import Link from 'next/link';
function RoomsSection() {
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">Our Rooms</h2>
          </div>
        </div>
        <div className="row">
          {RoomsData.map((room) => (
            <div key={room.id} className="col-sm col-md-6 col-lg-4 ftco-animate">
              <div className="room">
                <Link
                  href={room.link}
                  className="img d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url('${room.imageUrl}')` }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2"></span>
                  </div>
                </Link>
                <div className="text p-3 text-center">
                  <h3 className="mb-3">
                    <Link href={room.link}>{room.name}</Link>
                  </h3>
                  <p>
                    <span className="price mr-2">{room.price}</span>
                    <span className="per">per night</span>
                  </p>
                  <hr />
                  <p className="pt-1">
                    <Link href={room.detailsLink} className="btn-custom">
                      View Room Details <span className="icon-long-arrow-right"></span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsSection;
