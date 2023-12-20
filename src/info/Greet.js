import useData from "context/data";
import React from "react";
import EditButton from "src/admin/EditButton";

const Greet = () => {
  const PR = {position:"relative"}
  const {data} = useData()
  
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-3 col-md-12"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-image">
                <img src={data?.info?.greet_bgUrl} alt="프로필 사진" />
                <EditButton
                  mode="image"  
                  type="info" item="greet_bgUrl" text="배경이미지 삽입"
                  defaultImg="/image/info/greet.png"
                />
    
              </div>
            </div>

            <div
              className="col-lg-9 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <span>인사말</span>
                <h3>
                  {data.info.greet_title}
                  <EditButton type="info" item="greet_title" text="제목" />
                </h3>
                <p style={{...PR, whiteSpace:"pre-line"}}>
                  {data.info.greet_content}
                  <EditButton type="info" item="greet_content" text="내용" />

                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="about-shape-2">
          <img src="/images/about/shape-2.png" alt="혜진종합관리" />
        </div> */}
      </div>
    </>
  );
};

export default Greet;
