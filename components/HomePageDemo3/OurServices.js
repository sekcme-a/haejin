import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import useData from "context/data";
import EditButton from "components/admin/EditButton";

const PR = {position: 'relative'}

const OurServices = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const {data} = useData()
  

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
// 991
  const icons = [
    "ri-cast-line",
    "ri-codepen-line",
    "ri-stack-line",
    "ri-compass-line",
    "ri-code-line",
    "ri-codepen-line",
  ]
  // ri-computer-line


  return (
    <>
        <div className="services-area bg-F9F5F4 pt-100 pb-75">
        <div className="container" style={PR}>
          <EditButton
            mode="arrOfObj_services"
            type="main" item="ourServices_list" text="내용을 입력해주세요."
          />
          <div className="section-title">
            <span>관리 분야</span>
            <h2>동우 개발의 관리 분야를 소개합니다.</h2>
          </div>

          <div className="row justify-content-center">
            {data?.main?.ourServices_list?.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index} >
                <div className="single-services-box" style={windowWidth>=992 ? {minHeight: "340px"} : {}}>
                  <div className="icon">
                    <i className={`${icons[index]}`}></i>
                  </div> 
                  <h3>
                    <Link href={item.url} >
                      <a>{item.title}</a>
                    </Link>
                  </h3>
                  <p style={{wordBreak:"keep-all"}}>
                    {item.text}
                  </p>
                  <Link href={item.url}>
                    <a className="services-btn">자세히 보기</a>
                  </Link>
                  <div className="back-icon">
                    <i className="ri-cast-line"></i>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
