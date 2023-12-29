
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

import HeadMeta from "src/public/HeadMeta"
import useData from "context/data";
import { useEffect } from "react";
import WorkingProcess_Management from "src/info/WorkingProcess_Management";
import OverviewContent_Management from "src/info/OverviewContent_Management";


export default function Overview() {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])

  return (
    <>
<HeadMeta
        title="혜진종합관리-경영방침"
        description="혜진종합관리의 경영방침을 안내드립니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/info/management"
      />
      <PageBanner title="경영방침" subtitle="Management Philosophy" homeText="회사소개" homeUrl="/info/greet" />

        <WorkingProcess_Management />

        <OverviewContent_Management />
    </>
  );
}
