import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import EquipmentContent from "src/business/EquipmentContent"

import HeadMeta from "src/public/HeadMeta"

const Equipment = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])

  return(
    <>

      <HeadMeta
        title="혜진종합관리-장비보유현황"
        description="혜진종합관리의 장비보유현황을 소개합니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/business/equipment"
      />


      <PageBanner title="장비보유현황" subtitle="Equipment Inventory" homeText="업무영역 및 현황" homeUrl="/business/security" />
      <EquipmentContent />
    </>
  )
}

export default Equipment