

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import ThreeCompo from "components/major/Three";



const Three = () => {

  return(
    <>
      <Navbar />

      <PageBanner title="자산관리 서비스" subtitle="Asset Management Services" homeText="주요사업" homeUrl="/major/1" />

      <ThreeCompo />


      <Footer />
    </>
  )
}

export default Three