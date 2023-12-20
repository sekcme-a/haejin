
import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import SecurityContent from "src/management/SecurityContent"

const Security = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])

  return(
    <>
      <PageBanner title="경비보안관리" subtitle="Security Management" homeText="사업소개" homeUrl="/management/security" />
      <SecurityContent />
    </>
  )
}

export default Security