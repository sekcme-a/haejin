import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Partner = () => {
  return (
    <>
      <div className="partner-area ptb-65">
        <div className="container">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              500: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="mySwiper partner-slides"
          >
            <SwiperSlide>
              <div className="image-box">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/partner-1.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="image-box">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/partner-2.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="image-box">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/partner-3.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="image-box">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/partner-4.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="image-box">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/partner-5.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="image-box">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/partner-6.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="image-box">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/images/partner/partner-7.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
