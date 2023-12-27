

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import PartnerCompo from "components/info/Partner";

import useData from "context/data";
import { useEffect } from "react";


export default function Partner() {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])



  return (
    <>

      <PageBanner title="협력사" subtitle="Partner Company" homeText="회사소개" homeUrl="/info/greet" />

      <PartnerCompo />


    </>
  );
}
