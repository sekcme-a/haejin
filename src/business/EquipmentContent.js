
import useData from "context/data"
import EditButton from "src/admin/EditButton"
import { useMonitorSize } from "src/public/useMonitorSize"

const EquipmentContent = () => {
  const {monitorWidth} = useMonitorSize()
  const{data} = useData()

  return(
    <>
      <div className="working-process-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>장비보유현황</span>
            <h3 style={{position:"relative", whiteSpace:"pre-line"}}>
              {data?.business?.equipment_title}
              <EditButton type="business" item="equipment_title" text="제목" />
            </h3>
          </div>

          <div className="row justify-content-center pt-80"
            style={monitorWidth>=1200 ? {paddingLeft:"80px", paddingRight:"80px"}:{}}
          >
            <div className="case-study-details-desc">
              <div className="case-study-details-content">  


              <h3 style={{position:"relative"}}>
                  <span>| </span> {data.business.equipment_first_title}
                  <EditButton type="business" item="equipment_first_title" text="제목" />
                </h3>

                <img
                  src={data?.business?.equipment_content_img1}
                  href="기술인력현황"
                  style={{width:'700px'}}
                />
                <div style={{position:"relative"}}>
                  <EditButton
                    mode="image"  
                    type="business" item="equipment_content_img1" text="이미지 삽입"
                    defaultImg="/image/business/equipment.jpeg"
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

export default EquipmentContent