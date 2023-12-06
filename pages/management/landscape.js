

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import LandscapeCompo from "components/management/Landscape"

import useData from "context/data";
import { useEffect } from "react";

const Landscape = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])



  return(
    <>
      <Navbar />

      <PageBanner title="조경 · 미화 관리" subtitle="Landscape and Beautification Management" homeText="관리분야" homeUrl="/management/housing" />

      <LandscapeCompo />


      <Footer />
    </>
  )
}

export default Landscape