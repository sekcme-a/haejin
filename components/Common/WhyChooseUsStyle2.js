import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const WhyChooseUsStyle2 = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="why-choose-us-area-with-video ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-video-view">
                <div className="video-btn" onClick={() => setToggler(!toggler)}>
                  <i className="flaticon-play-button"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-content wrap-color"
                data-aos="fade-left"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsStyle2;
