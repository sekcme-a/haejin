import React from "react";
import Link from "next/link";
import EditButton from "components/admin/EditButton";
import useData from "context/data";

const MainBanner = () => {
  const {data} = useData()


  return (
    <>
      <div className="main-banner-wrap-area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-wrap-content" style={{marginLeft: "10px"}}>
                <span
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  DongWoo Development
                 
                </span>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                  style={{wordBreak:'keep-all', whiteSpace:"pre-line", position:"relative"}}
                >
                  {data.main.mainBanner_title}
                   <EditButton type="main" item="mainBanner_title" text="제목" />
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="580"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  {data.main.mainBanner_subtitle}
                  <EditButton type="main" item="mainBanner_subtitle" text="부제목" />
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-right"
                  data-aos-delay="90"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <Link href="/info/overview">
                    <a className="default-btn">회사소개 보러가기</a>
                  </Link>
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
              <div
                className="main-banner-wrap-image"
              >
                {/* 839*1080 */}
                <img src={data.main.mainBanner_bannerBg} alt="동우개발" />

                <div
                  className="banner-wrap-shape-1"
                >
                  <img
                    src="/images/main-banner/shape-1.png"
                    alt="동우개발"
                    data-aos="fade-down"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  />
              </div>
                <EditButton
                  type="main" item="mainBanner_bannerBg" text="배경이미지 삽입" mode="image" defaultImg="/images/main-banner/banner.png" 
                  style={{position:"absolute", top: 150, right: 100}}
                />
                <div
                  className="banner-wrap-shape-2"
                >
                  
                  <img
                    src="/images/main-banner/shape-2.png"
                    alt="동우개발"
                    data-aos="fade-up"
                    data-aos-delay="90"
                    data-aos-duration="900"
                    data-aos-once="true"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
