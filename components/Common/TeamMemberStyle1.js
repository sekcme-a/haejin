import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const TeamMemberStyle1 = () => {
  return (
    <>
      <div className="team-area-with-color ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="team-box-content">
                <span>Our Expert Team</span>
                <h3>Alone We Can Do So Little Together We Can Do So Much</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                  maecenas amet est scelerisque lectus tortor sit.
                </p>
                <div className="team-btn">
                  <Link href="/team">
                    <a className="default-btn">View More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8 col-md-12">
              <Swiper
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper team-slides"
              >
                <SwiperSlide>
                  <div className="single-team-card">
                    <div className="team-image">
                      <img src="/images/team/team-1.jpg" alt="Team Image" />

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/EnvyTheme"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/signup"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-linkedin-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3>Thomas Adison</h3>
                      <span>CEO & Founder</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-team-card">
                    <div className="team-image">
                      <img src="/images/team/team-2.jpg" alt="Team Image" />

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/EnvyTheme"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/signup"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-linkedin-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3>Jeclin Firnandos</h3>
                      <span>Manager</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-team-card">
                    <div className="team-image">
                      <img src="/images/team/team-3.jpg" alt="Team Image" />

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/EnvyTheme"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/signup"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-linkedin-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3>Albas Madris</h3>
                      <span>Marketing Director</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-team-card">
                    <div className="team-image">
                      <img src="/images/team/team-4.jpg" alt="Team Image" />

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/EnvyTheme"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/signup"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-linkedin-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3>Emma Olivia</h3>
                      <span>QA Engineer</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-team-card">
                    <div className="team-image">
                      <img src="/images/team/team-5.jpg" alt="Team Image" />

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/EnvyTheme"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/signup"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-linkedin-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3>William</h3>
                      <span>React Developer</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-team-card">
                    <div className="team-image">
                      <img src="/images/team/team-6.jpg" alt="Team Image" />

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/EnvyTheme"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/?lang=en"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/signup"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="ri-linkedin-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h3>Matthew</h3>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="team-shape-1">
          <img src="/images/team/shape-1.png" alt="Team Image" />
        </div>
      </div>
    </>
  );
};

export default TeamMemberStyle1;
