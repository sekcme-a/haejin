

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import OneCompo from "components/major/One";


import useData from "context/data";
import { useEffect } from "react";

const One = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.major.fetched) fetch_data("major")
  },[])



  return(
    <>
      <Navbar />

      <PageBanner title="공동주택의 토탈 관리 서비스" subtitle="Comprehensive Home Management Services" homeText="주요사업" homeUrl="/major/1" />

      <OneCompo />


      <Footer />
    </>
  )
}

export default One