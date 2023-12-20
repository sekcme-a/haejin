import EditButton from "src/admin/EditButton";
import useData from "context/data";
import React from "react";


const PR = {position: 'relative'}

const OurExpertise = () => {
  const {data} = useData()


  return (
    <>
      <div className="expertise-area-with-white-color ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-image-wrap top-zero"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                {/* 1080*976 */}
                <img src={data.main.aboutUs_img} alt="about us" />
                <EditButton
                  mode="image"
                  type="main" item="aboutUs_img" text="배경이미지 삽입 (1080*976)"
                  defaultImg="/images/expertise/expertise-3.png"
                />

                {/* <div
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
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-content black-color"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>About Us</span>
                <h3 style={{wordBreak:'keep-all'}}>
                  {data.main.aboutUs_title}
                  <EditButton type="main" item="aboutUs_title" text="제목" />
                </h3>
                <p style={{position:"relative"}}>
                  {data.main.aboutUs_content}
                  <EditButton type="main" item="aboutUs_content" text="내용" />
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6" style={{marginTop: "30px"}}>
                    {/* <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-stack-line"></i>
                      </div> */}
                      <h4
                        style={{position:"relative"}}
                      >
                        {data.main.aboutUs_subtitle1}
                        <EditButton type="main" item="aboutUs_subtitle1" text="부제목1" />
                      </h4>
                      
                      <p style={PR}>
                        {data.main.aboutUs_subContent1}
                        <EditButton type="main" item="aboutUs_subContent1" text="내용1" />
                      </p>
                    {/* </div> */}
                  </div>
                  <div className="col-lg-6 col-sm-6" style={{marginTop: "30px"}}>
                    {/* <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-stack-line"></i>
                      </div> */}
                      <h4
                        style={{position:"relative"}}
                      >
                        {data.main.aboutUs_subTitle2}
                        <EditButton type="main" item="aboutUs_subTitle2" text="부제목2" />
                      </h4>
                      
                      <p style={PR}>
                        {data.main.aboutUs_subContent2}
                        <EditButton type="main" item="aboutUs_subContent2" text="내용2" />
                      </p>
                    {/* </div> */}
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
