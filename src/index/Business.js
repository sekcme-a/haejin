import EditButton from "src/admin/EditButton";
import useData from "context/data";
import React from "react";

import styles from "./Business.module.css"

import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import { useRouter } from "next/router";

const WhyChooseUsStyle1 = () => {
  const router = useRouter()

  const {data} = useData()
  return (
    <>
      <div className="why-choose-us-area pb-100 pt-100">
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
                <span>Hae Jin General Management</span>
                <h3 style={{position:"relative"}}>
                  {data?.main?.business_title}
                  <EditButton type="main" item="business_title" text="제목" />
                </h3>
                <p style={{position:"relative"}}>
                  {data?.main?.business_content}
                  <EditButton type="main" item="business_content" text="내용" />
                </p>




                <div className={`choose-us-inner-box`}>
                  <div className={`${styles.icon_container} icon`}>
                    <GppGoodOutlinedIcon className={styles.icon} />
                    {/* <i className="flaticon-ad-campaign"></i> */}
                  </div>
                  <h4 className={styles.hover_effect} onClick={()=>router.push("/business/security")}>경비용역장점</h4>
                  <p >
                    {data?.main?.business_text1}
                    <EditButton type="main" item="business_text1" text="내용" />
                  </p>
                </div>


                <div className={`choose-us-inner-box`}>
                  <div className={`${styles.icon_container} icon`}>
                    <EngineeringOutlinedIcon className={styles.icon} />
                    {/* <i className="flaticon-ad-campaign"></i> */}
                  </div>
                  <h4 className={styles.hover_effect} onClick={()=>router.push("/business/resources")}>인력보유 및 교육</h4>
                  <p >
                    {data?.main?.business_text2}
                    <EditButton type="main" item="business_text2" text="내용" />
                  </p>
                </div>


                <div className={`choose-us-inner-box`}>
                  <div className={`${styles.icon_container} icon`}>
                    <ConstructionOutlinedIcon className={styles.icon} />
                    {/* <i className="flaticon-ad-campaign"></i> */}
                  </div>
                  <h4 className={styles.hover_effect} onClick={()=>router.push("/business/equipment")}>장비보유현황</h4>
                  <p >
                    {data?.main?.business_text3}
                    <EditButton type="main" item="business_text3" text="내용" />
                  </p>
                </div>


                <div className={`choose-us-inner-box`}>
                  <div className={`${styles.icon_container} icon`}>
                    <DisplaySettingsOutlinedIcon className={styles.icon} />
                    {/* <i className="flaticon-ad-campaign"></i> */}
                  </div>
                  <h4 className={styles.hover_effect} onClick={()=>router.push("/business/management")}>관리실적</h4>
                  <p >
                    {data?.main?.business_text4}
                    <EditButton type="main" item="business_text4" text="내용" />
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
                <img src={data.main.business_bgImg} alt="업무영역 및 현황" />
                <EditButton type="main" item="business_bgImg" text="이미지 삽입" mode="image" defaultImg="/image/main/business.png"/>
                <div
                  className="why-choose-us-shape-1"
                >
                  <img src="/images/why-choose-us/shape-1.png" alt="업무 바탕" />
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
