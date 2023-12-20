import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import ManagementCompo from "src/business/ManagementCompo"

const Management = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])

  return(
    <>
      <PageBanner title="관리실적" subtitle="Management Performance" homeText="업무영역 및 현황" homeUrl="/business/security" />

      <ManagementCompo />
    </>
  )
}

export default Management