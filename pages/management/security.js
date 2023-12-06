

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import SecurityCompo from "components/management/Security"

import useData from "context/data";
import { useEffect } from "react";


const Security = () => {


  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])



  return(
    <>
      <Navbar />

      <PageBanner title="경비보안관리" subtitle="Security Management" homeText="관리분야" homeUrl="/management/housing" />

      <SecurityCompo />


      <Footer />
    </>
  )
}

export default Security