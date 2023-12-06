import React from "react";
import Link from "next/link";

const TopServices = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-card">
                <div className="number">01</div>
                <h3>
                  <Link href="/service-details">
                    <a>Product Engineering</a>
                  </Link>
                </h3>
                <ul className="features-list">
                  <li>
                    <Link href="/service-details">
                      <a>Product Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Product Consultation</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Architechture Design</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-card">
                <div className="number">02</div>
                <h3>
                  <Link href="/service-details">
                    <a>UI/UX Design Strategy</a>
                  </Link>
                </h3>
                <ul className="features-list">
                  <li>
                    <Link href="/service-details">
                      <a>Brand Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Technology Prototyping</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Brand Integration</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-card">
                <div className="number">03</div>
                <h3>
                  <Link href="/service-details">
                    <a>Big Data & Analytics</a>
                  </Link>
                </h3>
                <ul className="features-list">
                  <li>
                    <Link href="/service-details">
                      <a>ETL/Data Management</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Analytical Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Stream Processing</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="features-shape-1">
          <img src="/images/features/shape-1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default TopServices;
