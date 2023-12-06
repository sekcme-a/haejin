import React from "react";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-image"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <img src="/images/expertise/expertise-1.png" alt="image" />

                <div
                  className="expertise-shape-1"
                >
                  <img
                    src="/images/expertise/shape-1.png"
                    alt="image"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  />
                </div>
                <div
                  className="expertise-shape-2"
                >
                  <img
                    src="/images/expertise/shape-2.png"
                    alt="image"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-content"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>Our Expertise</span>
                <h3>
                  Boost Business With Creative Idea & Brand Solutions With Us
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit lorem
                  ipsum dolor sit amet consectetur adipiscing elit et fames
                  maecenas amet est scelerisque lectus tortor sit.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-stack-line"></i>
                      </div>
                      <h4>Boost Your Sale</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        in pretium blandit urna.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-focus-2-line"></i>
                      </div>
                      <h4>Idea & Analysis</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        in pretium blandit urna.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
