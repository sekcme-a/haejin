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

export default function Index3() {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.main.fetched) fetch_data("main")
  },[])


  return (
    <>
      {/* <Navbar /> */}

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
