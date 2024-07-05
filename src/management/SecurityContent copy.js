
import useData from "context/data"
import EditButton from "src/admin/EditButton"
import { useMonitorSize } from "src/public/useMonitorSize"

const SecurityContent = () => {
  const {monitorWidth} = useMonitorSize()
  const{data} = useData()

  return(
    <>
      <div className="working-process-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>경비,보안관리</span>
            <h3 style={{position:"relative", whiteSpace:"pre-line"}}>
              {data?.management?.security_title}
              <EditButton type="management" item="security_title" text="제목" />
            </h3>
          </div>

          <div className="row justify-content-center pt-100"
            style={monitorWidth>=1200 ? {paddingLeft:"80px", paddingRight:"80px"}:{}}
          >
            <div className="case-study-details-desc">
              <div className="case-study-details-content">  





                <h3 style={{position:"relative"}}>
                  <span>1. </span> {data.management.securtiy_content_1_title}
                  <EditButton type="management" item="securtiy_content_1_title" text="제목1" />
                </h3>

                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.securtiy_content_1_subtitle1}
                  <EditButton type="management" item="securtiy_content_1_subtitle1" text="부제목1" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_1_text1}
                  <EditButton type="management" item="securtiy_content_1_text1" text="부제목1의 내용" />
                </p>

                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.securtiy_content_2_subtitle2}
                  <EditButton type="management" item="securtiy_content_2_subtitle2" text="부제목2" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_2_text2}
                  <EditButton type="management" item="securtiy_content_2_text2" text="부제목2의 내용" />
                </p>

                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.securtiy_content_3_subtitle3}
                  <EditButton type="management" item="securtiy_content_3_subtitle3" text="부제목3" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_3_text3}
                  <EditButton type="management" item="securtiy_content_3_text3" text="부제목3의 내용" />
                </p>






                <h3 style={{position:"relative", marginTop:"50px"}}>
                  <span>2. </span> {data.management.securtiy_content_2_title}
                  <EditButton type="management" item="securtiy_content_2_title" text="제목2" />
                </h3>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_2_text1}
                  <EditButton type="management" item="securtiy_content_2_text1" text="제목2의 내용" />
                </p>



                <h3 style={{position:"relative", marginTop:"50px"}}>
                  <span>3. </span> {data.management.securtiy_content_3_title}
                  <EditButton type="management" item="securtiy_content_3_title" text="제목3" />
                </h3>
                <img
                  src={data?.management?.securtiy_content_img1}
                  alt="관리운영계획"
                  style={{width:'500px'}}
                />
                <div style={{position:"relative"}}>
                  <EditButton
                    mode="image"  
                    type="management" item="securtiy_content_img1" text="이미지 삽입"
                    defaultImg="/image/management/security1.jpeg"
                  />
                </div>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_3_text1}
                  <EditButton type="management" item="securtiy_content_3_text1" text="제목3의 내용" />
                </p>




                <h3 style={{position:"relative", marginTop:"50px"}}>
                  <span>4. </span> {data.management.securtiy_content_4_title}
                  <EditButton type="management" item="securtiy_content_4_title" text="제목4" />
                </h3>
                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.securtiy_content_4_subtitle1}
                  <EditButton type="management" item="securtiy_content_4_subtitle1" text="부제목1" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_4_text1}
                  <EditButton type="management" item="securtiy_content_4_text1" text="부제목1의 내용" />
                </p>

                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.securtiy_content_4_subtitle2}
                  <EditButton type="management" item="securtiy_content_4_subtitle2" text="부제목2" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_4_text2}
                  <EditButton type="management" item="securtiy_content_4_text2" text="부제목2의 내용" />
                </p>

                <img
                  src={data?.management?.securtiy_content_img2}
                  alt="주차 관리"
                  style={{width:'500px'}}
                />
                <div style={{position:"relative"}}>
                  <EditButton
                    mode="image"  
                    type="management" item="securtiy_content_img2" text="이미지 삽입"
                    defaultImg="/image/management/security2.jpeg"
                  />
                </div>

                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.securtiy_content_4_subtitle3}
                  <EditButton type="management" item="securtiy_content_4_subtitle3" text="부제목3" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_4_text3}
                  <EditButton type="management" item="securtiy_content_4_text3" text="부제목3의 내용" />
                </p>

                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.securtiy_content_4_subtitle4}
                  <EditButton type="management" item="securtiy_content_4_subtitle4" text="부제목4" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_4_text4}
                  <EditButton type="management" item="securtiy_content_4_text4" text="부제목4의 내용" />
                </p>

                <h5 style={{position:"relative", marginBottom:"0", color:"(RGB: 144, 195, 141)"}}>
                  봄
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_4_subcontent_text1}
                  <EditButton type="management" item="securtiy_content_4_subcontent_text1" text="봄 내용" />
                </p>
                <h5 style={{position:"relative", marginBottom:"0", color:"RGB(135, 206, 250)"}}>
                  여름
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_4_subcontent_text2}
                  <EditButton type="management" item="securtiy_content_4_subcontent_text2" text="여름 내용" />
                </p>
                <h5 style={{position:"relative", marginBottom:"0", color:" RGB(210, 105, 30)"}}>
                  가을
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_4_subcontent_text3}
                  <EditButton type="management" item="securtiy_content_4_subcontent_text3" text="가을 내용" />
                </p>
                <h5 style={{position:"relative", marginBottom:"0", color:"RGB(70, 130, 180)"}}>
                  겨울
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_4_subcontent_text4}
                  <EditButton type="management" item="securtiy_content_4_subcontent_text4" text="겨울 내용" />
                </p>





                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.securtiy_content_4_subtitle5}
                  <EditButton type="management" item="securtiy_content_4_subtitle5" text="부제목1" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.securtiy_content_4_text5}
                  <EditButton type="management" item="securtiy_content_4_text5" text="부제목5의 내용" />
                </p>


              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default SecurityContent