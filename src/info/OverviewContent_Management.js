import useData from "context/data";
import React from "react";
import EditButton from "src/admin/EditButton";

const OverviewContent = () => {

  const {data} = useData()


  return (
    <>
      <div className="case-study-details-area pt-80 pb-75">
        <div className="container" style={{position:"relative"}}>
        <EditButton type="info" item="overview_management_list" text="내용 작성" mode="arrayOfObj_title_and_text" />
          <div className="case-study-details-desc">
            <div className="case-study-details-content">  
              
              {
                data?.info?.overview_management_list?.map((item, index) => (
                  <div key={index} style={{marginTop:"30px"}}>
                    <h3>
                      <span>|</span> {item.title}
                    </h3>
                    <p>
                      {item.text}
                    </p>
                  </div>
                ))
              }
            


              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OverviewContent