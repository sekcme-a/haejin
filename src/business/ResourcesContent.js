
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
            <span>인력 보유 및 교육</span>
            <h3 style={{position:"relative", whiteSpace:"pre-line"}}>
              {data?.business?.resources_title}
              <EditButton type="business" item="resources_title" text="제목" />
            </h3>
          </div>

          <div className="row justify-content-center pt-80"
            style={monitorWidth>=1200 ? {paddingLeft:"80px", paddingRight:"80px"}:{}}
          >
            <div className="case-study-details-desc">
              <div className="case-study-details-content">  


              <h3 style={{position:"relative"}}>
                  <span>| </span> {data.business.resources_first_title}
                  <EditButton type="business" item="resources_first_title" text="제목" />
                </h3>

                <img
                  src={data?.business?.resources_content_img1}
                  href="기술인력현황"
                  style={{width:'700px'}}
                />
                <div style={{position:"relative"}}>
                  <EditButton
                    mode="image"  
                    type="business" item="resources_content_img1" text="이미지 삽입"
                    defaultImg="/image/business/resources.jpeg"
                  />
                </div>




                <h3 style={{position:"relative"}}>
                  <span>| </span> {data.business.resources_second_title}
                  <EditButton type="business" item="resources_second_title" text="제목" />
                </h3>


                <h3 style={{position:"relative"}}>
                  {data.business.resources_content_1_title!==" " &&<span>1. </span>} {data.business.resources_content_1_title}
                  <div style={{position:"relative", width:"1px", height:"1px"}}>
                  <EditButton type="business" item="resources_content_1_title" text={`제목1(띄어쓰기 한칸으로 저장시 숨김)`} />
                  </div>
                </h3>
                {data.business.resources_content_1_title!==" "&&
                  <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                    {data.business.resources_content_1_text1}
                    <EditButton type="business" item="resources_content_1_text1" text="제목1의 내용" />
                  </p>
                }
                <h3 style={{position:"relative"}}>
                  {data.business.resources_content_2_title!==" " &&<span>2. </span>} {data.business.resources_content_2_title}
                  <div style={{position:"relative", width:"1px", height:"1px"}}>
                  <EditButton type="business" item="resources_content_2_title" text={`제목2(띄어쓰기 한칸으로 저장시 숨김)`} />
                  </div>
                </h3>
                {data.business.resources_content_2_title!==" "&&
                  <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                    {data.business.resources_content_2_text1}
                    <EditButton type="business" item="resources_content_2_text1" text="제목2의 내용" />
                  </p>
                }
                <h3 style={{position:"relative"}}>
                  {data.business.resources_content_3_title!==" " &&<span>3. </span>} {data.business.resources_content_3_title}
                  <div style={{position:"relative", width:"1px", height:"1px"}}>
                  <EditButton type="business" item="resources_content_3_title" text={`제목3(띄어쓰기 한칸으로 저장시 숨김)`} />
                  </div>
                </h3>
                {data.business.resources_content_3_title!==" "&&
                  <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                    {data.business.resources_content_3_text1}
                    <EditButton type="business" item="resources_content_3_text1" text="제목3의 내용" />
                  </p>
                }



              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default SecurityContent