

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import HistoryCompo from "src/info/History";


import useData from "context/data";
import { useEffect } from "react";


import HeadMeta from "src/public/HeadMeta"
const History = () => {
  const {data, fetch_data} = useData()

useEffect(()=>{
    if(!data.info.fetched) fetch_data("info")
},[])

  return(
    <>
<HeadMeta
        title="혜진종합관리-연혁"
        description="혜진종합관리의 연혁을 안내드립니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/info/history"
      />
      <PageBanner title="연혁" subtitle="History" homeText="회사소개" homeUrl="/info/greet" />

      <HistoryCompo />


    </>
  )
}

export default History