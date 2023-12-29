import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import ResourcesContent from "src/business/ResourcesContent"
import HeadMeta from "src/public/HeadMeta"
const Resources = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])

  return(
    <>

<HeadMeta
        title="혜진종합관리-인력 보유 및 교육"
        description="혜진종합관리의 인력 보유 및 교육을 소개합니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/business/resources"
      />


      <PageBanner title="인력 보유 및 교육" subtitle="Human Resources" homeText="업무영역 및 현황" homeUrl="/business/security" />
      <ResourcesContent />
    </>
  )
}

export default Resources