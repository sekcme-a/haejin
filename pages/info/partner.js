

import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import PartnerCompo from "src/info/Partner";

import useData from "context/data";
import { useEffect } from "react";

import HeadMeta from "src/public/HeadMeta"
export default function Partner() {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])



  return (
    <>
<HeadMeta
        title="혜진종합관리-협력사"
        description="혜진종합관리의 협력사를 안내드립니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/info/partner"
      />
      <PageBanner title="협력사" subtitle="Partner Company" homeText="회사소개" homeUrl="/info/greet" />

      {/* <PartnerCompo /> */}


    </>
  );
}
