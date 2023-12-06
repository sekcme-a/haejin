import React from "react";

const WhyChooseUsStyle1 = () => {
  return (
    <>
      <div className="why-choose-us-area pb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-content"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>Why Choose Us</span>
                <h3>Our Working Process To Help Your Boost Your Business</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit lorem
                  ipsum dolor sit amet consectetur adipiscing elit et fames
                  maecenas amet.
                </p>

                <div className="choose-us-inner-box">
                  <div className="icon">
                    <i className="flaticon-ad-campaign"></i>
                  </div>
                  <h4>Advertising & Branding</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit velit
                    sagittis eu viverra pellentesque condimentum.
                  </p>
                </div>

                <div className="choose-us-inner-box">
                  <div className="icon">
                    <i className="flaticon-public-relations"></i>
                  </div>
                  <h4>Public Relation</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit velit
                    sagittis eu viverra pellentesque condimentum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-image"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <img src="/images/why-choose-us/choose-1.jpg" alt="동우개발" />

                <div
                  className="why-choose-us-shape-1"
                >
                  <img src="/images/why-choose-us/shape-1.png" alt="동우개발" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsStyle1;
