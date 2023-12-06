import React from "react";
import Link from "next/link";

const AboutOurCompany = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image-wrap">
                <img
                  src="/images/about/about-2.jpg"
                  alt="About Image"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
                <img
                  src="/images/about/about-3.jpg"
                  alt="About Image"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
                <div
                  className="about-shape-3"
                >
                  <img src="/images/about/shape-1.png" alt="Shape" />
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <span>About Our Company</span>
                <h3>
                  Best Award Winning Creative Agency Shape Of Perfect Solution
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit lorem
                  ipsum dolor sit amet consectetur adipiscing elit et fames
                  maecenas amet est scelerisque lectus tortor sit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit lorem
                  ipsum dolor lorem ipsum dolor sit amet consectetur adipiscing
                  elit et fames maecenas amet est scelerisque lectus tortor sit
                  lorem ipsum dolor lorem ipsum dolor sit amet consectetur
                  adipiscing elit et fames maecenas amet est.
                </p>
                <div className="about-btn">
                  <Link href="/about">
                    <a className="default-btn">Learn More</a>
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

export default AboutOurCompany;
