import React from "react";
import Link from "next/link";

const CaseStudyCard = () => {
  return (
    <>
      <div className="case-study-area-without-color pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>Case Study</span>
            <h2>Grow And Experience Endless Possibilites To Your Business</h2>
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

            <div className="col-lg-6 col-md-6">
              <div className="single-case-study-card">
                <Link href="/case-study-details">
                  <a>
                    <img
                      src="/images/case-study/case-study-3.jpg"
                      alt="동우개발"
                    />
                  </a>
                </Link>

                <div className="case-study-content">
                  <h3>
                    <Link href="/case-study-details">
                      <a>Movie Recommendation</a>
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
                      src="/images/case-study/case-study-4.jpg"
                      alt="동우개발"
                    />
                  </a>
                </Link>

                <div className="case-study-content">
                  <h3>
                    <Link href="/case-study-details">
                      <a>Data Analysis</a>
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
                      src="/images/case-study/case-study-5.jpg"
                      alt="동우개발"
                    />
                  </a>
                </Link>

                <div className="case-study-content">
                  <h3>
                    <Link href="/case-study-details">
                      <a>Benefits Research</a>
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
                      src="/images/case-study/case-study-6.jpg"
                      alt="동우개발"
                    />
                  </a>
                </Link>

                <div className="case-study-content">
                  <h3>
                    <Link href="/case-study-details">
                      <a>Detection Project</a>
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

          <div className="pagination-area">
            <a href="#" className="prev page-numbers">
              <i className="ri-arrow-left-s-line"></i>
            </a>
            <span className="page-numbers current" aria-current="page">
              1
            </span>
            <a href="#" className="page-numbers">
              2
            </a>
            <a href="#" className="page-numbers">
              3
            </a>
            <a href="#" className="next page-numbers">
              <i className="ri-arrow-right-s-line"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyCard;
