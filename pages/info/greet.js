
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import GreetCompo from "src/info/Greet";


import useData from "context/data";
import { useEffect } from "react";

import HeadMeta from "src/public/HeadMeta"
export default function Greet() {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])



  return (
    <>
<HeadMeta
        title="혜진종합관리-인사말"
        description="혜진종합관리의 인사말을 안내드립니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/info/"
      />


      <PageBanner title="인사말" subtitle="Greetings" homeText="회사소개" homeUrl="/info/greet" />

      <GreetCompo />

    </>
  );
}
