import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import SanitationContent from "src/management/SanitationContent"

import HeadMeta from "src/public/HeadMeta"


const Sanitation = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])

  return(
    <>

<HeadMeta
        title="혜진종합관리-위생용역관리"
        description="혜진종합관리의 위생용역관리를 소개해드립니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/management/sanitation"
      />


      
      <PageBanner title="위생용역관리" subtitle="Sanitation Management" homeText="사업소개" homeUrl="/management/security" />
      <SanitationContent />
    </>
  )
}

export default Sanitation