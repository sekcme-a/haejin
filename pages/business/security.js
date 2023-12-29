import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import SecurityContent from "src/business/SecurityContent"
import HeadMeta from "src/public/HeadMeta"
const Security = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])

  return(
    <>

<HeadMeta
        title="혜진종합관리-경비용역장점"
        description="혜진종합관리의 경비용역장점을 소개합니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/business/security"
      />

      
      <PageBanner title="경비용역장점" subtitle="Security Outsourcing" homeText="업무영역 및 현황" homeUrl="/business/security" />
      <SecurityContent />
    </>
  )
}

export default Security