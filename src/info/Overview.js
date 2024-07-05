import useData from "context/data";
import React from "react";
import EditButton from "src/admin/EditButton";
const PR = {position:"relative"}

const WhyChooseUsStyle1 = () => {
  const {data} = useData()
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
                <span>{`회사 개요 (사훈, 경영이념 )`}</span>
                <h3>
                  {data.info.overview_title}
                  <EditButton type="info" item="overview_title" text="제목" />
                </h3>
                <p style={PR}>
                  {data.info.overview_content}
                  <EditButton type="info" item="overview_content" text="내용" />
                </p>

                <div className="choose-us-inner-box">
                  <div className="icon">
                    <i className="ri-compass-3-line"></i>
                  </div>
                  <h4>
                    {data.info.overview_subtitle1}
                    <EditButton type="info" item="overview_subtitle1" text="부제목1" />
                  </h4>
                  <p style={PR}>
                    {data.info.overview_subcontent1}
                    <EditButton type="info" item="overview_subcontent1" text="내용1" />
                  </p>
                </div>

                <div className="choose-us-inner-box">
                  <div className="icon">
                    <i className="flaticon-public-relations"></i>
                  </div>
                  <h4>
                    {data.info.overview_subtitle2}
                    <EditButton type="info" item="overview_subtitle2" text="부제목2" />
                  </h4>
                  <p style={PR}>
                    {data.info.overview_subcontent2}
                    <EditButton type="info" item="overview_subcontent2" text="내용2" />
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
                <img src={data.info.overview_bgUrl} alt="회사 개요" />
                <EditButton
                  mode="image"
                  type="info" item="overview_bgUrl" text="배경이미지 삽입 (1000*910)"
                  defaultImg="/images/info/overview.png"
                />
                <div
                  className="why-choose-us-shape-1"
                >
                  <img src="/images/why-choose-us/shape-1.png" alt="패턴" />
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
