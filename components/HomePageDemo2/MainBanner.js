import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div
        className="main-hero-area"
        style={{ backgroundImage: `url("/images/main-hero/main-hero-bg.jpg")` }}
      >
        <div className="container-fluid">
          <div className="main-hero-content">
            <span
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Creative Digital Agency
            </span>
            <h1
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
              Creative Idea & Brand Solutions
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam.
            </p>

            <ul
              className="hero-btn"
              data-aos="fade-right"
              data-aos-delay="90"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <li>
                <Link href="/contact">
                  <a className="default-btn">Get A Quote</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="optional-btn">Learn More</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="main-hero-shape-1">
          <img src="/images/main-hero/shape-1.png" alt="혜진종합관리" />
        </div>
        <div className="main-hero-shape-2">
          <img src="/images/main-hero/shape-2.png" alt="혜진종합관리" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
