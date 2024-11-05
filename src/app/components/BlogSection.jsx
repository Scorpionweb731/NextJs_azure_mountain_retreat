import { BlogData } from '@/Data';
import Link from 'next/link';

function BlogSection() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          {BlogData.map((blog) => (
            <div key={blog.id} className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <Link href={blog.link} className="block-20" style={{ backgroundImage: `url(${blog.image})` }}>
                </Link>
                <div className="text mt-3">
                  <h3 className="heading mt-3">
                    <Link href="#">{blog.title}</Link>
                  </h3>
                  <div className="meta mb-3">
                    <div><Link href="#">{blog.date}</Link></div>
                    <div><Link href="#">{blog.author}</Link></div>
                    <div><Link href="#" className="meta-chat"><span className="icon-chat"></span> {blog.comments}</Link></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
