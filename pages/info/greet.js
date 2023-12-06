
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import GreetCompo from "components/info/Greet";


import useData from "context/data";
import { useEffect } from "react";


export default function Greet() {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])



  return (
    <>
      <Navbar />

      <PageBanner title="인사말" subtitle="Greetings  " homeText="회사소개" homeUrl="/info/greet" />

      <GreetCompo />


      <Footer />
    </>
  );
}
