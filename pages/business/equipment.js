import { useEffect, useState } from "react"

import useData from "context/data"
import PageBanner from "src/public/PageBanner"
import EquipmentContent from "src/business/EquipmentContent"

const Equipment = () => {

  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])

  return(
    <>
      <PageBanner title="장비보유현황" subtitle="Equipment Inventory" homeText="업무영역 및 현황" homeUrl="/business/security" />
      <EquipmentContent />
    </>
  )
}

export default Equipment