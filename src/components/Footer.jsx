import React from "react";
import Link from "next/link";
import { FooterLinks } from "@/Data";
const Footer = () => {
  return (
    <>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">
                  {FooterLinks.outro[0].heading}
                </h2>
                <p>{FooterLinks.outro[1].about}</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  {FooterLinks.outro[2].socialLinks.map((link, index) => (
                    <li className="ftco-animate" key={index}>
                      <Link href={link.href}>
                        <span className={link.icon}></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Useful Links</h2>
                <ul className="list-unstyled">
                  {FooterLinks.usefulLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="py-2 d-block">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Privacy</h2>
                <ul className="list-unstyled">
                  {FooterLinks.privacyLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="py-2 d-block">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    {FooterLinks.contactDetails.map((detail, index) => (
                      <li key={index}>
                        <span className={`icon ${detail.icon}`}></span>
                        {detail.link ? (
                          <Link href={detail.link}>
                            <span className="text">{detail.text}</span>
                          </Link>
                        ) : (
                          <span className="text">{detail.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy;{new Date().getFullYear()} All rights reserved |
                This template is made with{" "}
                <i className="icon-heart color-danger" aria-hidden="true"></i>{" "}
                by{" "}
                <Link href="https://colorlib.com" target="_blank">
                  Colorlib
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
