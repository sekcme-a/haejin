import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const TestimonialStyle2 = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-12">
              <div className="testimonials-box-content">
                <span>Our Review</span>
                <h3>Alone We Can Do So Little Together We Can Do So Much</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit lorem
                  ipsum dolor.
                </p>
                <Link href="/testimonials">
                  <a className="default-btn">View More</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2
                  }
                }}
                modules={[Pagination]}
                className="mySwiper testimonials-slides-two"
              >
                <SwiperSlide>
                  <div className="single-testimonials-card">
                    <div className="box-content">
                      <div className="icon">
                        <i className="flaticon-straight-quotes"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        fames fusce venenatis mattis orci neque mi nascetur
                        tristique vitae tincidunt sit aliquam iaculis placerat
                        mattis tellus dolor id tincidunt viverra pulvinar
                        dignissim nunc.
                      </p>
                    </div>

                    <div className="info">
                      <div className="d-flex align-items-center justify-content-start">
                        <img
                          src="/images/testimonials/testimonials-1.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <div className="title">
                          <h3>Thomas Adison</h3>
                          <span>CEO at ABC LTD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-card">
                    <div className="box-content">
                      <div className="icon">
                        <i className="flaticon-straight-quotes"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        fames fusce venenatis mattis orci neque mi nascetur
                        tristique vitae tincidunt sit aliquam iaculis placerat
                        mattis tellus dolor id tincidunt viverra pulvinar
                        dignissim nunc.
                      </p>
                    </div>

                    <div className="info">
                      <div className="d-flex align-items-center justify-content-start">
                        <img
                          src="/images/testimonials/testimonials-2.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <div className="title">
                          <h3>Aiven Rishi</h3>
                          <span>CEO at Nicktos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-card">
                    <div className="box-content">
                      <div className="icon">
                        <i className="flaticon-straight-quotes"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        fames fusce venenatis mattis orci neque mi nascetur
                        tristique vitae tincidunt sit aliquam iaculis placerat
                        mattis tellus dolor id tincidunt viverra pulvinar
                        dignissim nunc.
                      </p>
                    </div>

                    <div className="info">
                      <div className="d-flex align-items-center justify-content-start">
                        <img
                          src="/images/testimonials/testimonials-3.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <div className="title">
                          <h3>Aiven Rishi</h3>
                          <span>CEO at ET</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-card">
                    <div className="box-content">
                      <div className="icon">
                        <i className="flaticon-straight-quotes"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        fames fusce venenatis mattis orci neque mi nascetur
                        tristique vitae tincidunt sit aliquam iaculis placerat
                        mattis tellus dolor id tincidunt viverra pulvinar
                        dignissim nunc.
                      </p>
                    </div>

                    <div className="info">
                      <div className="d-flex align-items-center justify-content-start">
                        <img
                          src="/images/testimonials/testimonials-4.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                        <div className="title">
                          <h3>Thomas Adison</h3>
                          <span>React Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="testimonials-shape-1">
          <img src="/images/testimonials/shape-1.png" alt="혜진종합관리" />
        </div>
      </div>
    </>
  );
};

export default TestimonialStyle2;
