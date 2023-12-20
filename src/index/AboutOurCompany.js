import React, {useState, useEffect} from "react";
import Link from "next/link";
import EditButton from "src/admin/EditButton";
import useData from "context/data";

const AboutOurCompany = () => {
  const {data} = useData()
  const [monitorWidth, setMonitorWidth] = useState();

  // 창의 크기가 변경될 때 실행되는 이펙트
  useEffect(() => {
    // 창의 크기가 변경될 때마다 실행되는 핸들러
    const handleResize = () => {
      setMonitorWidth(window.innerWidth);
    };

    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트되면 이벤트 리스너 해제
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image-wrap">
                {/* <img
                  src="/images/about/about-2.jpg"
                  alt="About Image"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                /> */}
                   <img
                  src={data?.main?.about_img1}
                  alt="About Image"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
                



                {/* <img
                  src="/images/about/about-3.jpg"
                  alt="About Image"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                /> */}
                             
                <img
                  src={data?.main?.about_img2}
                  alt="About Image"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                  style={monitorWidth>=768 ? {maxWidth:"360px"} : {}}
                />
               
                <div
                  className="about-shape-3"
                >
                  <EditButton type="main" item="about_img2" text="작은 이미지 삽입" mode="image" defaultImg="/image/main/about-2.png"/>
                  <img src="/images/about/shape-1.png" alt="Shape" />
                  
                </div> 
                <EditButton type="main" item="about_img1" text="큰 이미지 삽입" mode="image" defaultImg="/image/main/about-1.png"/>
              </div>
              
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <span>About Our Company</span>
                <h3>
                {data?.main?.about_title}
                <EditButton type="main" item="about_title" text="제목" />
                </h3>
                <p style={{whiteSpace:"pre-line", position:"relative"}}>
                  {data?.main?.about_content}
                  <EditButton type="main" item="about_content" text="내용" />
                </p>
                <div className="about-btn" style={{position:"relative"}}>
                  <Link href={data?.main?.about_button_url ?? "/"}>
                    <a className="default-btn">
                      자세히 보기
                    </a>
                  </Link>
                  <EditButton type="main" item="about_button_url" text="자세히 보기 버튼 링크" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurCompany;
