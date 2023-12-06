import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Our Pricing</span>
            <h2>Choose The Best Pricing Plan We Can Help You With</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-send-plane-line"></i> Basic Plan
                  </h3>
                </div>
                <div className="price">
                  $110 <span>/Monthly</span>
                </div>
                <div className="pricing-btn">
                  <Link href="/contact">
                    <a className="default-btn">Get Started Today</a>
                  </Link>
                  <span>Money-Back Guarantee</span>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Brand And Identity
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Powerful Customization
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Individual Solutions
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Information Technology
                  </li>
                  <li>
                    <del>
                      <i className="ri-close-line"></i> Unlimited Domains
                    </del>
                  </li>
                  <li>
                    <del>
                      <i className="ri-close-line"></i> 24/7 Support
                    </del>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table active">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-star-line"></i> Standard Plan
                  </h3>
                </div>
                <div className="price">
                  $180 <span>/Monthly</span>
                </div>
                <div className="pricing-btn">
                  <Link href="/contact">
                    <a className="default-btn">Get Started Today</a>
                  </Link>
                  <span>Money-Back Guarantee</span>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Brand And Identity
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Powerful Customization
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Individual Solutions
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Information Technology
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Unlimited Domains
                  </li>
                  <li>
                    <del>
                      <i className="ri-close-line"></i> 24/7 Support
                    </del>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-shield-line"></i> Premium Plan
                  </h3>
                </div>
                <div className="price">
                  $320 <span>/Monthly</span>
                </div>
                <div className="pricing-btn">
                  <Link href="/contact">
                    <a className="default-btn">Get Started Today</a>
                  </Link>
                  <span>Money-Back Guarantee</span>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Brand And Identity
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Powerful Customization
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Individual Solutions
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Information Technology
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Unlimited Domains
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 24/7 Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
