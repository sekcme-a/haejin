

import useData from "context/data"
import EditButton from "src/admin/EditButton"
import { useMonitorSize } from "src/public/useMonitorSize"

const SanitationContent = () => {
  const {monitorWidth} = useMonitorSize()
  const{data} = useData()

  return(
    <>
      <div className="working-process-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>위생용역관리</span>
            <h4 style={{position:"relative", whiteSpace:"pre-line", width:"100%"}}>
              {data?.management?.sanitation_title}
              <EditButton type="management" item="sanitation_title" text="제목" />
            </h4>
          </div>

          <div className="row justify-content-center pt-100"
            style={monitorWidth>=1200 ? {paddingLeft:"80px", paddingRight:"80px"}:{}}
          >
            <div className="case-study-details-desc">
              <div className="case-study-details-content">  





                <h3 style={{position:"relative"}}>
                  <span>| </span> {data.management.sanitation_content_1_title}
                  <EditButton type="management" item="sanitation_content_1_title" text="제목1" />
                </h3>

                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.sanitation_content_1_subtitle1}  
                  <EditButton type="management" item="sanitation_content_1_subtitle1" text="부제목1" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.sanitation_content_1_text1}
                  <EditButton type="management" item="sanitation_content_1_text1" text="부제목1의 내용" />
                </p>


                <div className="row justify-content-center">

            
<div className="col-lg-3 col-sm-6">
  <div className="single-working-process-card">
    <div className="number">01</div>
    <h3 style={{position:"relative"}}>
      {data.management.sanitation_list_title1}
      <EditButton type="management" item="sanitation_list_title1" text="제목1" />
    </h3>
    <p style={{position:"relative", whiteSpace:"pre-line"}}>
      {data.management.sanitation_list_text1}
      <EditButton type="management" item="sanitation_list_text1" text="내용1" />
    </p>
  </div>
</div>


<div className="col-lg-3 col-sm-6">
  <div className="single-working-process-card">
    <div className="number">02</div>
    <h3 style={{position:"relative"}}>
      {data.management.sanitation_list_title2}
      <EditButton type="management" item="sanitation_list_title2" text="제목2" />
    </h3>
    <p style={{position:"relative", whiteSpace:"pre-line"}}>
      {data.management.sanitation_list_text2}
      <EditButton type="management" item="sanitation_list_text2" text="내용2" />
    </p>
  </div>
</div>


<div className="col-lg-3 col-sm-6">
  <div className="single-working-process-card">
    <div className="number">03</div>
    <h3 style={{position:"relative"}}>
      {data.management.sanitation_list_title3}
      <EditButton type="management" item="sanitation_list_title3" text="제목3" />
    </h3>
    <p style={{position:"relative", whiteSpace:"pre-line"}}>
      {data.management.sanitation_list_text3}
      <EditButton type="management" item="sanitation_list_text3" text="내용3" />
    </p>
  </div>
</div>


<div className="col-lg-3 col-sm-6">
  <div className="single-working-process-card">
    <div className="number">04</div>
    <h3 style={{position:"relative"}}>
      {data.management.sanitation_list_title4}
      <EditButton type="management" item="sanitation_list_title4" text="제목4" />
    </h3>
    <p style={{position:"relative", whiteSpace:"pre-line"}}>
      {data.management.sanitation_list_text4}
      <EditButton type="management" item="sanitation_list_text4" text="내용4" />
    </p>
  </div>
</div>

<div className="working-process-line"></div>
</div>




                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.sanitation_list_title5}
                  <EditButton type="management" item="sanitation_list_title5" text="부제목1" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.sanitation_list_text5}
                  <EditButton type="management" item="sanitation_list_text5" text="부제목1의 내용" />
                </p>
                <h5 style={{position:"relative", marginBottom:"0"}}>
                  {data.management.sanitation_list_title6}
                  <EditButton type="management" item="sanitation_list_title6" text="부제목2" />
                </h5>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.sanitation_list_text6}
                  <EditButton type="management" item="sanitation_list_text6" text="부제목2의 내용" />
                </p>





                <h3 style={{position:"relative"}}>
                  <span>1. </span> {data.management.sanitation_content_2_title1}
                  <EditButton type="management" item="sanitation_content_2_title1" text="제목1" />
                </h3>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.sanitation_content_2_text1}
                  <EditButton type="management" item="sanitation_content_2_text1" text="제목1의 내용" />
                </p>


                <h3 style={{position:"relative"}}>
                  <span>2. </span> {data.management.sanitation_content_2_title2}
                  <EditButton type="management" item="sanitation_content_2_title2" text="제목2" />
                </h3>
                <p style={{position:"relative", whiteSpace:"pre-line", lineHeight:"1.6"}}>
                  {data.management.sanitation_content_2_text2}
                  <EditButton type="management" item="sanitation_content_2_text2" text="제목2의 내용" />
                </p>





              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
  export default SanitationContent