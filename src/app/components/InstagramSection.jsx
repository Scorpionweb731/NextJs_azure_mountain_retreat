import { InstagramImages } from '@/Data';
import Link from 'next/link';

function InstagramSection() {
  return (
    <section className="instagram">
      <div className="container-fluid">
        <div className="row no-gutters justify-content-center pb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <h2><span>Instagram</span></h2>
          </div>
        </div>
        <div className="row no-gutters">
          {InstagramImages.map((image) => (
            <div key={image.id} className="col-sm-12 col-md ftco-animate">
              <Link href={image.url} className="insta-img image-popup" style={{ backgroundImage: `url(${image.url})` }}>
                <div className="icon d-flex justify-content-center">
                  <span className="icon-instagram align-self-center"></span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
