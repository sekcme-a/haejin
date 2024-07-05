

import useData from "context/data"
import EditButton from "src/admin/EditButton"
import { useMonitorSize } from "src/public/useMonitorSize"

const ImmigrationContent = () => {
  const {monitorWidth} = useMonitorSize()
  const{data} = useData()

  return(
    <>
      <div className="working-process-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>이주관리  </span>
            <h3 style={{position:"relative", whiteSpace:"pre-line", width:"100%"}}>
              {data?.management?.immigration_title}
              <EditButton type="management" item="immigration_title" text="제목" />
            </h3>
          </div>

          <div className="row justify-content-center pt-100"
            style={monitorWidth>=1200 ? {paddingLeft:"80px", paddingRight:"80px"}:{}}
          >
            <div className="case-study-details-desc">
              <div className="case-study-details-content">  





                <h3 style={{position:"relative"}}>
                  <span>| </span> {data.management.immigration_content_1_title}
                  <EditButton type="management" item="immigration_content_1_title" text="제목1" />
                </h3>


                <div style={{position:"relative", width:"50%", height:"10px"}}>
                  <EditButton
                    mode="image"  
                    type="management" item="immigration_content_img1" text="이미지 삽입"
                    defaultImg="/image/management/immigration1.png"
                  />
                </div>
                <div style={{display:"flex", width:'100%', justifyContent:"center"}}>
                  <img
                    src={data?.management?.immigration_content_img1}
                    alt="관리운영계획"
                    style={{width:'800px'}}
                  />
                </div>



                <h3 style={{position:"relative"}}>
                  <span>1. </span> {data.management.immigration_content_2_title1}
                  <EditButton type="management" item="immigration_content_2_title1" text="제목1" />
                </h3>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.immigration_content_2_text1}
                  <EditButton type="management" item="immigration_content_2_text1" text="제목1의 내용" />
                </p>


                <h3 style={{position:"relative"}}>
                  <span>2. </span> {data.management.immigration_content_2_title2}
                  <EditButton type="management" item="immigration_content_2_title2" text="제목2" />
                </h3>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.immigration_content_2_text2}
                  <EditButton type="management" item="immigration_content_2_text2" text="제목2의 내용" />
                </p>



                <h3 style={{position:"relative"}}>
                  <span>3. </span> {data.management.immigration_content_2_title3}
                  <EditButton type="management" item="immigration_content_2_title3" text="제목3" />
                </h3>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.immigration_content_2_text3}
                  <EditButton type="management" item="immigration_content_2_text3" text="제목3의 내용" />
                </p>



                <div style={{position:"relative", width:"50%", height:"10px"}}>
                  <EditButton
                    mode="image"  
                    type="management" item="immigration_content_img2" text="이미지 삽입"
                    defaultImg="/image/management/immigration2.jpeg"
                  />
                </div>
                <div style={{display:"flex", width:'100%', justifyContent:"center"}}>
                  <img
                    src={data?.management?.immigration_content_img2}
                    alt="재건축 실적 "
                    style={{width:'800px'}}
                  />
                </div>




              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
  export default ImmigrationContent