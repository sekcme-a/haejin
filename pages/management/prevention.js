import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import PreventionContent from "src/management/PreventionContent"

const Prevention = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])

  return(
    <>
      <PageBanner title="범죄 예방" subtitle="Crime Prevention" homeText="사업소개" homeUrl="/management/security" />
      <PreventionContent />
    </>
  )
}

export default Prevention