
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
            <span>경비용역장점</span>
            <h3 style={{position:"relative", whiteSpace:"pre-line"}}>
              {data?.business?.security_title}
              <EditButton type="business" item="security_title" text="제목" />
            </h3>
          </div>

          <div className="row justify-content-center pt-80"
            style={monitorWidth>=1200 ? {paddingLeft:"80px", paddingRight:"80px"}:{}}
          >
            <div className="case-study-details-desc">
              <div className="case-study-details-content">  



                <h3 style={{position:"relative"}}>
                  {data.business.securtiy_content_1_title!==" " &&<span>1. </span>} {data.business.securtiy_content_1_title}
                  <div style={{position:"relative", width:"1px", height:"1px"}}>
                  <EditButton type="business" item="securtiy_content_1_title" text={`제목1(띄어쓰기 한칸으로 저장시 숨김)`} />
                  </div>
                </h3>
                {data.business.securtiy_content_1_title!==" "&&
                  <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                    {data.business.securtiy_content_1_text1}
                    <EditButton type="business" item="securtiy_content_1_text1" text="제목1의 내용" />
                  </p>
                }
                <h3 style={{position:"relative"}}>
                  {data.business.securtiy_content_2_title!==" " &&<span>2. </span>} {data.business.securtiy_content_2_title}
                  <div style={{position:"relative", width:"1px", height:"1px"}}>
                  <EditButton type="business" item="securtiy_content_2_title" text={`제목2(띄어쓰기 한칸으로 저장시 숨김)`} />
                  </div>
                </h3>
                {data.business.securtiy_content_2_title!==" "&&
                  <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                    {data.business.securtiy_content_2_text1}
                    <EditButton type="business" item="securtiy_content_2_text1" text="제목2의 내용" />
                  </p>
                }
                <h3 style={{position:"relative"}}>
                  {data.business.securtiy_content_3_title!==" " &&<span>3. </span>} {data.business.securtiy_content_3_title}
                  <div style={{position:"relative", width:"1px", height:"1px"}}>
                  <EditButton type="business" item="securtiy_content_3_title" text={`제목3(띄어쓰기 한칸으로 저장시 숨김)`} />
                  </div>
                </h3>
                {data.business.securtiy_content_3_title!==" "&&
                  <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                    {data.business.securtiy_content_3_text1}
                    <EditButton type="business" item="securtiy_content_3_text1" text="제목3의 내용" />
                  </p>
                }
                <h3 style={{position:"relative"}}>
                  {data.business.securtiy_content_4_title!==" " &&<span>4. </span>} {data.business.securtiy_content_4_title}
                  <div style={{position:"relative", width:"1px", height:"1px"}}>
                  <EditButton type="business" item="securtiy_content_4_title" text={`제목4(띄어쓰기 한칸으로 저장시 숨김)`} />
                  </div>
                </h3>
                {data.business.securtiy_content_4_title!==" "&&
                  <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                    {data.business.securtiy_content_4_text1}
                    <EditButton type="business" item="securtiy_content_4_text1" text="제목4의 내용" />
                  </p>
                }
                <h3 style={{position:"relative"}}>
                  {data.business.securtiy_content_5_title!==" " &&<span>5. </span>} {data.business.securtiy_content_5_title}
                  <div style={{position:"relative", width:"1px", height:"1px"}}>
                  <EditButton type="business" item="securtiy_content_5_title" text={`제목5(띄어쓰기 한칸으로 저장시 숨김)`} />
                  </div>
                </h3>
                {data.business.securtiy_content_5_title!==" "&&
                  <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                    {data.business.securtiy_content_5_text1}
                    <EditButton type="business" item="securtiy_content_5_text1" text="제목5의 내용" />
                  </p>
                }



                {data?.business?.securtiy_content_img1 && data?.business?.securtiy_content_img1!=="" && 
                  <img
                    src={data?.business?.securtiy_content_img1}
                    href="주차 관리"
                    style={{width:'500px'}}
                  />
                }
                <div style={{position:"relative"}}>
                  <EditButton
                    mode="image"  
                    type="business" item="securtiy_content_img1" text="이미지 삽입"
                    defaultImg=""
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

export default SecurityContent