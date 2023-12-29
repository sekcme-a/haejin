import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import ImmigrationContent from "src/management/ImmigrationContent"


import HeadMeta from "src/public/HeadMeta"


const Immigration = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])

  return(
    <>

<HeadMeta
        title="혜진종합관리-이주관리"
        description="혜진종합관리의 이주관리를 소개해드립니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/management/immigration"
      />


      <PageBanner title="이주관리" subtitle="Immigration Management" homeText="사업소개" homeUrl="/management/security" />
      <ImmigrationContent />
    </>
  )
}

export default Immigration