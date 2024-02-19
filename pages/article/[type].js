
import React, {useState, useEffect} from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Footer from "components/Layout/Footer/Footer";
import { CircularProgress, Grid } from "@mui/material"

import AdvertisementCompo from "src/job/Advertisement"

import useData from "context/data";
import HeadMeta from "src/public/HeadMeta"

import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter()
  const {type} = router.query

  const {thumbnailsList, fetch_thumbnails_list} = useData()
  const [isLoading, setIsLoading] = useState(true)

  const [typeText, setTypeText] = useState("")

  useEffect(()=> {
    const fetchData = async () => {

      if(thumbnailsList[type]) setIsLoading(false)
      else {
        await fetch_thumbnails_list(type)
        setIsLoading(false)
      }
    }

    if(type==="announcement") setTypeText("공지사항")


    if(type)
      fetchData()

  },[type])



  return (
    <>
      <HeadMeta
        title={`혜진종합관리-${typeText}`}
        description={`혜진종합관리의 ${typeText}를 안내드립니다.`}
        url={`https://xn--zb0b93v0rlpgb594av4a.kr${router.asPath}`}
      />


      <PageBanner title={typeText} subtitle={type?.charAt(0).toUpperCase() + type?.slice(1)} homeText="공지사항" homeUrl="/article/announcement" />

      {isLoading ?
        <div style={{width:"100vw", marginTop:'100px',marginBottom:"100px",  display:"flex", justifyContent:"center"}}><CircularProgress /></div>
         : 
        <AdvertisementCompo list={thumbnailsList[type]} {...{type, typeText}}/>
        }

    </>
  )
}


export default Article