import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import ImmigrationContent from "src/management/ImmigrationContent"

const Immigration = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])

  return(
    <>
      <PageBanner title="이주관리" subtitle="Immigration Management" homeText="사업소개" homeUrl="/management/security" />
      <ImmigrationContent />
    </>
  )
}

export default Immigration