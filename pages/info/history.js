

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import HistoryCompo from "src/info/History";


import useData from "context/data";
import { useEffect } from "react";



const History = () => {
  const {data, fetch_data} = useData()

useEffect(()=>{
    if(!data.info.fetched) fetch_data("info")
},[])

  return(
    <>

      <PageBanner title="연혁" subtitle="History" homeText="회사소개" homeUrl="/info/greet" />

      <HistoryCompo />


    </>
  )
}

export default History