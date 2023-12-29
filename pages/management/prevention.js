import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import PreventionContent from "src/management/PreventionContent"


import HeadMeta from "src/public/HeadMeta"


const Prevention = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])

  return(
    <>

<HeadMeta
        title="혜진종합관리-범죄 예방"
        description="혜진종합관리의 범죄 예방를 소개해드립니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/management/prevention"
      />


      <PageBanner title="범죄 예방" subtitle="Crime Prevention" homeText="사업소개" homeUrl="/management/security" />
      <PreventionContent />
    </>
  )
}

export default Prevention