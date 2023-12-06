

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import HousingCompo from "components/management/Housing"
import useData from "context/data";
import { useEffect } from "react";

const Housing = () => {
  return(
    <>
      <Navbar />

      <PageBanner title="공동주택관리" subtitle="Joint Housing Management" homeText="관리분야" homeUrl="/management/housing" />

      <HousingCompo />


      <Footer />
    </>
  )
}

export default Housing