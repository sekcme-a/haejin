

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import FinancialCompo from "components/management/Financial"


const Financial = () => {
  return(
    <>
      <Navbar />

      <PageBanner title="회계관리" subtitle="Financial Management" homeText="관리분야" homeUrl="/management/housing" />

      <FinancialCompo />


      <Footer />
    </>
  )
}

export default Financial