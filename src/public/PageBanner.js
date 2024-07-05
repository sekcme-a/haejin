import React, {useState, useEffect} from "react";
import Link from 'next/link';
import { useMonitorSize } from "./useMonitorSize";


const PageBanner = ({ title,subtitle, homeText, homeUrl }) => {
  const {monitorWidth} = useMonitorSize()

  if(monitorWidth>=768)
  return (
    <>
      <div className="page-banner-area">
        <div className="container"> 
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div
                className="page-banner-content"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <h2 style={{display:"inline-block", }}>
                  {`${title} `}
                  <p style={{display:"inline-block", fontSize:"40px", color:"#555", lineHeight:1.05}}>{subtitle}</p>
                </h2>

                <ul>
                  <li>
                    <Link href={homeUrl}>
                      <a>{homeText}</a>
                    </Link>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="page-banner-image"
              >
                <img
                  src="/image/banner-img.png"
                  alt="페이지 이미지"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                  style={{width:"260px"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  else return (
    <>
    <div className="page-banner-area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* <div className="col-lg-6 col-md-6"> */}
            <div
              className="page-banner-content"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <h2>{title}</h2>

              <ul>
                <li>
                  <Link href={homeUrl}>
                    <a>{homeText}</a>
                  </Link>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          {/* </div> */}

        </div>
      </div>
    </div>
  </>
  )
};

export default PageBanner;
