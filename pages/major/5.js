

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import FiveCompo from "components/major/Five";



const Five = () => {

  return(
    <>
      <Navbar />

      <PageBanner title="공동주택의 토탈 관리 서비스" subtitle="Comprehensive Home Management Services" homeText="주요사업" homeUrl="/major/1" />

      <FiveCompo />


      <Footer />
    </>
  )
}

export default Five