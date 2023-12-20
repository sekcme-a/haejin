import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import SecurityContent from "src/business/SecurityContent"

const Security = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])

  return(
    <>
      <PageBanner title="경비용역장점" subtitle="Security Outsourcing" homeText="업무영역 및 현황" homeUrl="/business/security" />
      <SecurityContent />
    </>
  )
}

export default Security