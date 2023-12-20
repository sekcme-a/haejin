
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import GreetCompo from "src/info/Greet";


import useData from "context/data";
import { useEffect } from "react";


export default function Greet() {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])



  return (
    <>

      <PageBanner title="인사말" subtitle="Greetings" homeText="회사소개" homeUrl="/info/greet" />

      <GreetCompo />

    </>
  );
}
