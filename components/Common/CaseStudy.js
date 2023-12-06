import React from "react";
import Link from "next/link";

const CaseStudy = () => {
  return (
    <>
      <div className="case-study-area pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <span>Case Study</span>
                <h2>
                  Grow And Experience Endless Possibilites To Your Business
                </h2>
              </div>
              <div className="col-lg-5 col-md-12 text-end">
                <Link href="/case-study">
                  <a className="default-btn">View More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="single-case-study-card">
                <Link href="/case-study-details">
                  <a>
                    <img
                      src="/images/case-study/case-study-1.jpg"
                      alt="동우개발"
                    />
                  </a>
                </Link>
                <div className="case-study-content">
                  <h3>
                    <Link href="/case-study-details">
                      <a>Product Engineering</a>
                    </Link>
                  </h3>
                  <Link href="/case-study-details">
                    <a className="case-btn">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-case-study-card">
                <Link href="/case-study-details">
                  <a>
                    <img
                      src="/images/case-study/case-study-2.jpg"
                      alt="동우개발"
                    />
                  </a>
                </Link>
                <div className="case-study-content">
                  <h3>
                    <Link href="/case-study-details">
                      <a>Customer Segmentation</a>
                    </Link>
                  </h3>
                  <Link href="/case-study-details">
                    <a className="case-btn">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
