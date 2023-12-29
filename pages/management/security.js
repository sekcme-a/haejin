
import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import SecurityContent from "src/management/SecurityContent"


import HeadMeta from "src/public/HeadMeta"


const Security = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.management.fetched) fetch_data("management")
  },[])

  return(
    <>

<HeadMeta
        title="혜진종합관리-경비보안관리"
        description="혜진종합관리의 경비보안관리를 소개해드립니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/management/security"
      />


      <PageBanner title="경비보안관리" subtitle="Security Management" homeText="사업소개" homeUrl="/management/security" />
      <SecurityContent />
    </>
  )
}

export default Security