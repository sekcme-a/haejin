import EditButton from "src/admin/EditButton";
import useData from "context/data";
import React from "react";

const PR = {position: "relative"}

const Business = () => {
  const {data} = useData()


  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-12" style={PR}>
              {/* 585*600 */}
                <img
                  src={data?.info?.business_bgUrl}
                  alt="management"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
                <EditButton
                  mode="image"
                  type="info" item="business_bgUrl" text="배경이미지 삽입 (1170*1200)"
                  defaultImg="/images/info/business.png"
                />

            </div>

            <div
              className="col-lg-8 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <span>경영방침 | Management Policy</span>
                <h3>
                  {data.info.business_title}
                  <EditButton type="info" item="business_title" text="제목" />
                </h3>
                <p style={{whiteSpace:"pre-line", wordBreak:"keep-all", ...PR}}>
                  {data.info.business_content}
                  <EditButton type="info" item="business_content" text="내용" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
