import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import ManagementCompo from "src/business/ManagementCompo"

import HeadMeta from "src/public/HeadMeta"

const Management = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])

  return(
    <>

<HeadMeta
        title="혜진종합관리-관리실적"
        description="혜진종합관리의 관리실적을 소개합니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/business/management"
      />


      <PageBanner title="관리실적" subtitle="Management Performance" homeText="업무영역 및 현황" homeUrl="/business/security" />

      <ManagementCompo />
    </>
  )
}

export default Management