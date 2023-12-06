

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import TwoCompo from "components/major/Two";



const Two = () => {

  return(
    <>
      <Navbar />

      <PageBanner title="오피스텔 · 상가 · 기타 업무용 건물의 시설" subtitle="Facilities for Offices, Retail, and Other Commercial Buildings" homeText="주요사업" homeUrl="/major/1" />

      <TwoCompo />


      <Footer />
    </>
  )
}

export default Two