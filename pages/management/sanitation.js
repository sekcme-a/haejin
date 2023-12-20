import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import SanitationContent from "src/management/SanitationContent"

const Sanitation = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])

  return(
    <>
      <PageBanner title="위생용역관리" subtitle="Sanitation Management" homeText="사업소개" homeUrl="/management/security" />
      <SanitationContent />
    </>
  )
}

export default Sanitation