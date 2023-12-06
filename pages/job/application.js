





import React, {useState, useEffect} from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import ApplicationCompo from "components/job/Application"

const Application = () => {


  return(
    <>
      <Navbar />

      <PageBanner title="입사지원" subtitle="Job Application" homeText="채용공고" homeUrl="/job/advertisement" />
      <div style={{marginTop: "100px"}} />
      <ApplicationCompo />

      <Footer />
    </>
  )
}

export default Application