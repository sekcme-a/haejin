

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import EstateCompo from "components/management/Estate"


const Estate = () => {
  return(
    <>
      <Navbar />

      <PageBanner title="부동산자산관리" subtitle="Real Estate Asset Management" homeText="관리분야" homeUrl="/management/housing" />

      <EstateCompo />


      <Footer />
    </>
  )
}

export default Estate