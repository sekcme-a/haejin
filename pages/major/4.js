

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import FourCompo from "components/major/Four";



const Four = () => {

  return(
    <>
      <Navbar />

      <PageBanner title="시행&시공사에 대한 관리부분 컨설팅 서비스" subtitle="Implementation and Construction Management Consulting Services" homeText="주요사업" homeUrl="/major/1" />

      <FourCompo />


      <Footer />
    </>
  )
}

export default Four