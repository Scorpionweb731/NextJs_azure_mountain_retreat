import {AboutData} from '@/Data'
import Link from 'next/link';
function AboutSection() {
    return (
      <section className="ftco-section ftc-no-pb ftc-no-pt">
        <div className="container">
          <div className="row">
            <div
              className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${AboutData.backgroundImage})` }}
            >
              <Link href={AboutData.videoLink}>
                <span className="icon popup-vimeo d-flex justify-content-center align-items-center">
                  <span className="icon-play" />
                </span>
              </Link>
            </div>
  
            <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
              <div className="heading-section pt-md-5 pl-md-5 mb-5">
                <div>
                  <span className="subheading">{AboutData.subheading}</span>
                  <h2 className="mb-4">{AboutData.title}</h2>
                </div>
              </div>
  
              <div className="pb-md-5">
                {AboutData.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <ul className="ftco-social d-flex">
                  {AboutData.socialLinks.map((link, index) => (
                    <li key={index} className="ftco-animate">
                      <Link href={link.url}>
                        <span>
                          <span className={link.icon}></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default AboutSection