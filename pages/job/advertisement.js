

import React, {useState, useEffect} from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Footer from "components/Layout/Footer/Footer";
import { CircularProgress, Grid } from "@mui/material"

import AdvertisementCompo from "src/job/Advertisement"

import useData from "context/data";
import HeadMeta from "src/public/HeadMeta"
const Advertisement = () => {

  const {thumbnailsList, fetch_thumbnails_list} = useData()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    const fetchData = async () => {
      if(thumbnailsList["advertisement"]) setIsLoading(false)
      else {
        await fetch_thumbnails_list("advertisement")
        setIsLoading(false)
      }
    }
    fetchData()
  },[])

  return(
    <>
<HeadMeta
        title="혜진종합관리-채용공고"
        description="혜진종합관리의 채용공고를 안내드립니다."
        url="https://xn--zb0b93v0rlpgb594av4a.kr/job/advertisement"
      />


      <PageBanner title="채용공고" subtitle="Job Advertisement" homeText="채용공고" homeUrl="/job/advertisement" />

      {isLoading ?
        <div style={{width:"100vw", marginTop:'100px',marginBottom:"100px",  display:"flex", justifyContent:"center"}}><CircularProgress /></div>
         : 
        <AdvertisementCompo list={thumbnailsList["advertisement"]}/>
        }

    </>
  )
}

export default Advertisement