
import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import AboutOurCompany from "components/About2/AboutOurCompany";
import FunFactStyle1 from "components/Common/FunFactStyle1";
import Pricing from "components/PricingPlan/Pricing";
import TeamMemberStyle3 from "components/Common/TeamMemberStyle3";
import WhyChooseUsStyle1 from "components/Common/WhyChooseUsStyle1";
import TestimonialStyle1 from "components/Common/TestimonialStyle1";
import OurExpertise from "components/About2/OurExpertise";
import Faq from "components/Common/Faq";
import Footer from "components/Layout/Footer/Footer";

import OverviewCompo from "components/info/Overview"


import useData from "context/data";
import { useEffect } from "react";
import WorkingProcess from "src/info/WorkingProcess";
import OverviewContent from "src/info/OverviewContent";


export default function Overview() {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])

  return (
    <>

      <PageBanner title="회사 개요" subtitle="Company Overview" homeText="회사소개" homeUrl="/info/greet" />

        <WorkingProcess />

        <OverviewContent />
      <Footer />
    </>
  );
}
