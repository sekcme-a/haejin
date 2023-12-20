
import useData from "context/data"
import styles from "./HowToGo.module.css"
import { useState, useEffect } from "react"
import EditButton from "src/admin/EditButton"
// import useData from "context/data"
// import EditButton from "src/admin/EditButton"
const Map = () => {
  const {data} = useData()

  return(
    <>
      
      <div className={styles.main_container}>
        <h1>오시는 길</h1>
        <p style={{position:"relative"}}>
          {data.info.howToGo_subtitle}
          <EditButton type="info" item="howToGo_subtitle" text="부제목"/>
        </p>
        
        <div className={styles.title} style={{position:"relative"}}>
          {/* <EditButton type="map" item="subtitle" mode="map" text="경도/위도"/> */}
          찾아오시는 길
        </div>
          <div className={styles.mainContainer}>

            <div className={styles.container}>
              <div className={styles.item} style={{position:"relative"}}>
                - 주 소 
              </div>
              <div className={styles.context} style={{position:"relative"}}>
                {data.info.howToGo_address}<br/>
                <EditButton type="info" item="howToGo_address" text="주소" />
              </div>
            </div>


            <div className={styles.container}>
              <div className={styles.item} style={{position:"relative"}}>
                - 지하철 역 
                {/* <EditButton type="map" item="subway" text="지하철 역 "/> */}
              </div>
              <div className={styles.context} style={{position:"relative"}}>
                {data.info.howToGo_subway}
                <EditButton type="info" item="howToGo_subway" text="지하철" />
                <br/>
              </div>
            </div>


            <div className={styles.container}>
              <div className={styles.item} style={{position:"relative"}}>
                - 버스정류장 
                {/* <EditButton type="map" item="bus" text="버스정류장"/> */}
              </div>
              <div className={styles.context} style={{position:"relative"}}>
                {data.info.howToGo_bus}
                <EditButton type="info" item="howToGo_bus" text="버스" />
              </div>
            </div>

          </div>
      </div>

    </>
  )
}

export default Map