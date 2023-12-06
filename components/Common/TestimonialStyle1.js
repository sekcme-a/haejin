import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const TestimonialStyle1 = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Testimonials</span>
            <h2>What Our Clients Are Saying?</h2>
          </div>

          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-box">
                <div className="icon">
                  <i className="flaticon-straight-quotes"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                  fusce venenatis mattis orci neque mi nascetur tristique vitae
                  tincidunt sit aliquam iaculis placerat mattis tellus dolor id
                  tincidunt viverra pulvinar dignissim nunc.
                </p>

                <div className="info">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="/images/testimonials/testimonials-1.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="title">
                      <h3>James Anderson</h3>
                      <span>CEO at ABC LTD</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <div className="icon">
                  <i className="flaticon-straight-quotes"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                  fusce venenatis mattis orci neque mi nascetur tristique vitae
                  tincidunt sit aliquam iaculis placerat mattis tellus dolor id
                  tincidunt viverra pulvinar dignissim nunc.
                </p>

                <div className="info">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="/images/testimonials/testimonials-2.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="title">
                      <h3>Thomas Adison</h3>
                      <span>CEO at EnvyTheme</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <div className="icon">
                  <i className="flaticon-straight-quotes"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                  fusce venenatis mattis orci neque mi nascetur tristique vitae
                  tincidunt sit aliquam iaculis placerat mattis tellus dolor id
                  tincidunt viverra pulvinar dignissim nunc.
                </p>

                <div className="info">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="/images/testimonials/testimonials-3.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="title">
                      <h3>James Robert</h3>
                      <span>ReactJS Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <div className="icon">
                  <i className="flaticon-straight-quotes"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                  fusce venenatis mattis orci neque mi nascetur tristique vitae
                  tincidunt sit aliquam iaculis placerat mattis tellus dolor id
                  tincidunt viverra pulvinar dignissim nunc.
                </p>

                <div className="info">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="/images/testimonials/testimonials-4.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="title">
                      <h3>Michael John</h3>
                      <span>CEO at ABC</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <div className="icon">
                  <i className="flaticon-straight-quotes"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                  fusce venenatis mattis orci neque mi nascetur tristique vitae
                  tincidunt sit aliquam iaculis placerat mattis tellus dolor id
                  tincidunt viverra pulvinar dignissim nunc.
                </p>

                <div className="info">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="/images/testimonials/testimonials-5.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="title">
                      <h3>David Richard</h3>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-box">
                <div className="icon">
                  <i className="flaticon-straight-quotes"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                  fusce venenatis mattis orci neque mi nascetur tristique vitae
                  tincidunt sit aliquam iaculis placerat mattis tellus dolor id
                  tincidunt viverra pulvinar dignissim nunc.
                </p>

                <div className="info">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="/images/testimonials/testimonials-6.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                    <div className="title">
                      <h3>Thomas Charles</h3>
                      <span>CEO at ET</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyle1;
