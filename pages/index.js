import React, { useEffect } from "react";
import Navbar from "src/public/Navbar";
import MainBanner from "src/index/MainBanner";
import OurServices from "components/HomePageDemo3/OurServices";
import AboutOurCompany from "src/index/AboutOurCompany";
import TestimonialStyle2 from "components/Common/TestimonialStyle2";
import TeamMemberStyle2 from "components/Common/TeamMemberStyle2";
import Faq from "components/Common/Faq";
import Cta from "components/Common/Cta";
import Footer from "components/Layout/Footer/Footer";
import useData from "context/data";
import TopServices from "src/index/TopServices";
import Business from "src/index/Business"

import HeadMeta from "src/public/HeadMeta";
import PopUp from "src/index/PopUp";

export default function Index3() {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.main.fetched) fetch_data("main")
  },[])


  return (
    <>


<HeadMeta
        title="혜진종합관리"
        description="경비용역/위생용역/이주관리,범죄예방 혜진종합관리입니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr"
      />
      {/* <Navbar /> */}
      <PopUp />

      <MainBanner />

      <TopServices />

      <AboutOurCompany />


      <OurServices />

      <Business />

     

      {/* <WhyChooseUsStyle2 /> */}

      {/* <Pricing /> */}

      {/* <CaseStudy /> */}

      {/* <AboutOurCompany /> */}

      {/* <TestimonialStyle2 /> */}

      {/* <TeamMemberStyle2 /> */}

      {/* <Faq /> */}

      {/* <div className="pt-100">
        <Cta />
      </div> */}

      {/* <Footer /> */}
    </>
  );
}
