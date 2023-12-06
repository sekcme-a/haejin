

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import BuildingCompo from "components/management/Building"


const Building = () => {
  return(
    <>
      <Navbar />

      <PageBanner title="빌딩종합관리" subtitle="Building Facilities Management" homeText="관리분야" homeUrl="/management/housing" />

      <BuildingCompo />


      <Footer />
    </>
  )
}

export default Building