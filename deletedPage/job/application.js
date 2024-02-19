





import React, {useState, useEffect} from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Footer from "components/Layout/Footer/Footer";

import ApplicationCompo from "src/job/Application"

import HeadMeta from "src/public/HeadMeta"

const Application = () => {


  return(
    <>
<HeadMeta
        title="혜진종합관리-입사지원"
        description="혜진종합관리에 입사지원하실 수 있습니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/job/application"
      />

      <PageBanner title="입사지원" subtitle="Job Application" homeText="채용공고" homeUrl="/job/advertisement" />
      <div style={{marginTop: "100px"}} />
      <ApplicationCompo />

    </>
  )
}

export default Application