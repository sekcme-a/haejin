

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import HrdCompo from "components/management/Hrd"


const Hrd = () => {
  return(
    <>
      <Navbar />

      <PageBanner title="인사관리" subtitle="HR Management" homeText="관리분야" homeUrl="/management/housing" />

      <HrdCompo />


      <Footer />
    </>
  )
}

export default Hrd