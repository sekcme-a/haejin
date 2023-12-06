

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import BusinessCompo from "components/info/Business";

import useData from "context/data";
import { useEffect } from "react";



const Business = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])



  return(
    <>
      <Navbar />

      <PageBanner title="경영방침" subtitle="Management Policy" homeText="회사소개" homeUrl="/info/greet" />

      <BusinessCompo />


      <Footer />
    </>
  )
}

export default Business