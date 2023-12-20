import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";
import useData from "context/data";
import EditButton from "src/admin/EditButton";

const MainBanner = () => {

  const {data} = useData()


  return (
    <>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-5 col-md-12"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="main-banner-content">
                <span style={{color:"rgb(12, 12, 139)"}}>Hae Jin General Management</span>
                <h1 style={{whiteSpace:"pre-line"}}>{`혜진종합관리`}</h1>
                <h2 style={{whiteSpace:"pre-line",position:"relative"}}>
                  {data?.main?.mainBanner_subtitle}
                  <EditButton type="main" item="mainBanner_subtitle" text="부제목" /></h2>
                
                <p>
                  {``}
                </p>
                <div className="banner-btn" style={{position:"relative"}}>
                  <Link href={data?.main?.mainBanner_button_url ?? "/"}>
                    <a className="default-btn">소개 보러가기</a>
                    
                  </Link>
                  <EditButton type="main" item="mainBanner_button_url" text="버튼 링크(https://포함 입력)" />
                </div>
                
              </div>
            </div>

            <div
              className="col-lg-7 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              {/* <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper main-banner-image-slides"
              >
                <SwiperSlide> */}
                <div className="mySwiper main-banner-image-slides">
                  <div className="slides-image-item">
                    {/* <img
                      src="/images/main-banner/banner-1.jpg"
                      alt="Banner Img 1"
                    /> */}
                    <img
                      src={data?.main?.mainBanner_image}
                      alt="혜진종합관리 배너"
                    />
                    <EditButton type="main" item="mainBanner_image" text="이미지 삽입" mode="image" defaultImg="/image/main/main_banner.jpg"/>
                  </div>
                </div>
                {/* </SwiperSlide>
              </Swiper> */}
            </div>
          </div>
        </div>

        {/* <div className="main-banner-shape-1">
          <img src="/images/main-banner/shape-1.png" alt="Shape 1" />
        </div>
        <div className="main-banner-shape-2">
          <img src="/images/main-banner/shape-2.png" alt="Shape 2" />
        </div> */}
        <div className="main-banner-bg-text" style={{color: "rgb(244,244,244)"}}>Hae Jin</div>
      </div>
    </>
  );
};

export default MainBanner;
