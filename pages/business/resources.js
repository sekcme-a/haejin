import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import ResourcesContent from "src/business/ResourcesContent"

const Resources = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])

  return(
    <>
      <PageBanner title="인력 보유 및 교육" subtitle="Human Resources" homeText="업무영역 및 현황" homeUrl="/business/security" />
      <ResourcesContent />
    </>
  )
}

export default Resources