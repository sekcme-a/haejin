import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Get Benefit And More With Our Excelent Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-card">
                <div className="icon">
                  <i className="ri-cast-line"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Business Strategy</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip iscing elit non
                  in pretium blandit loremm ipdum pronibh ultrna some.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-card">
                <div className="icon color-two">
                  <i className="ri-codepen-fill"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Website Development</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip iscing elit non
                  in pretium blandit loremm ipdum pronibh ultrna some.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-card">
                <div className="icon color-three">
                  <i className="ri-stack-line"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Marketing & Reporting</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip iscing elit non
                  in pretium blandit loremm ipdum pronibh ultrna some.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="view-more-btn">
            <Link href="/services">
              <a className="default-btn">View More</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
